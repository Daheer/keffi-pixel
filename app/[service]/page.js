"use client";

import Link from 'next/link';

import { Button as NextUIButton } from '@nextui-org/react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { supabase } from '../components/supabase';
import { Input } from '@nextui-org/react';
import React from 'react';
import { RadioGroup, Radio, cn } from "@nextui-org/react";
import { v4 as uuidv4 } from 'uuid';
import { getAvailableServices, getServiceName } from '../components/utils';
import { getServicePrice } from '../components/utils';
import { toast } from 'react-hot-toast';

async function registerJob(jobID, emailValue, estimatedPrice, serviceType, documentLink) {
  const { data, error } = await supabase
    .from('jobs')
    .upsert([
      {
        job_id: jobID,
        email: emailValue,
        price: estimatedPrice,
        service_type: serviceType,
        document: documentLink,
      },
    ]);
  if (error) {
    console.log(error);
  }
}

export const PriorityRadio = (props) => {
  const { children, ...otherProps } = props;

  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
          "inline-flex m-0 bg-transparent items-center justify-between",
          "flex-row-reverse max-w-[300px] cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent",
          "data-[selected=true]:border-white/20"
        ),
        label: "inline-flex items-center justify-between text-white w-full text-xs",
        description: "text-xs text-default-500 text-white",
      }}>
      {children}
    </Radio>
  );
};
export default function ServicePage({ params }) {
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  const [emailValue, setEmailValue] = React.useState("");
  const [selectedPriority, setSelectedPriority] = React.useState("normal");
  const [nCopies, setNCopies] = React.useState(1);
  const [isFileSelected, setIsFileSelected] = React.useState(false);
  const [uploadedDocument, setUploadedDocument] = React.useState(null);
  let documentLink = "";

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setUploadedDocument(selectedFile);
      setIsFileSelected(true);
    }
  };

  const handleSumission = async (event) => {
    event.preventDefault();

    if (!uploadedDocument || !isFileSelected) {
      toast.error('Please upload a valid document!', { position: "top-center" });
      return;
    } else if (uploadedDocument.size > 50000000) {
      toast.error("File size is too large. Please upload a file less than 50MB", { position: "top-center" });
      return;
    } else {
      const { data, error } = await supabase.storage
        .from('uploaded_files')
        .upload(`public/${uploadedDocument.name}`, uploadedDocument, {
          cacheControl: '3600',
          upsert: true
        });
      if (error) {
        console.log(error);
        alert('Error uploading image file.');
        return;
      }
      const uploadedDocumentData = supabase
        .storage
        .from('uploaded_files')
        .getPublicUrl(`public/${uploadedDocument.name}`)
      documentLink = uploadedDocumentData.data.publicUrl;
    }
    if (!emailValue) {
      toast.error("Please enter your email address", { position: "top-center" });
      return;
    }
    if (!nCopies || nCopies < 1) {
      toast.error("Please enter a valid number of copies you want", { position: "top-center" });
      return;
    }
    if (!selectedPriority) {
      toast.error("Please select a priority", { position: "top-center" });
      return;
    }

    const jobID = uuidv4();
    const serviceType = getServiceName(params.service);
    const servicePricePerCopy = getServicePrice(params.service);
    const estimatedPrice = selectedPriority === 'normal' ? servicePricePerCopy * nCopies : servicePricePerCopy * nCopies * 1.1;

    toast.promise(
      registerJob(jobID, emailValue, estimatedPrice, serviceType, documentLink),
      {
        loading: 'Registering job...',
        success: `Order registered! 👍🏾 \n Estimated total ₦${Math.floor(estimatedPrice)} \n\n Your Job ID: ${jobID}`,
        error: <b>Could not add your order.</b>,
      }
    );
  }

  return (
    <div className='flex flex-col justify-center'>
      <div className='ml-64 w-fit hover:scale-x-125'>
        <Link href="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H6M12 5l-7 7 7 7" /></svg>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <h1 className="text-white text-xl">Selected service: {getServiceName(params.service)}</h1>
        </div>
        {
          (getAvailableServices().includes(params.service)) ? (
            <form onSubmit={handleSumission}>
              <div className="items-center mt-5 justify-center flex flex-col grid grid-cols-1 gap-12">
                <Button sx={{
                  color: 'white',
                  background: 'transparent',
                  border: '1px solid white',
                  borderRadius: '5px',
                  padding: '10px',
                  fontFamily: 'Circular Std',
                  transition: 'transform 0.5s',
                  '&:hover': {
                    background: 'transparent',
                    transform: 'scale(1.1)',
                  }
                }} component="label" variant="contained">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dddddd" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.2 15c.7-1.2 1-2.5.7-3.9-.6-2-2.4-3.5-4.4-3.5h-1.2c-.7-3-3.2-5.2-6.2-5.6-3-.3-5.9 1.3-7.3 4-1.2 2.5-1 6.5.5 8.8m8.7-1.6V21" /><path d="M16 16l-4-4-4 4" /></svg>
                  &nbsp;
                  {isFileSelected ? uploadedDocument.name : 'Upload file'}

                  <VisuallyHiddenInput name="upload-file" onChange={handleFileChange} type="file" accept="image/png, application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.openxmlformats-officedocument.presentationml.presentation, text/plain" />
                </Button>
                <div className="w-full flex flex-col gap-2">
                  <Input
                    type="email"
                    variant="bordered"
                    label="Email"
                    className="text-white"
                    placeholder="you@example.com"
                    isClearable
                    description="So we can alert you once your document is ready!"
                    value={emailValue}
                    startContent={
                      <svg
                        aria-hidden="true"
                        fill="none"
                        focusable="false"
                        height="1em"
                        role="presentation"
                        viewBox="0 0 24 24"
                        width="1em"
                        className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
                      >
                        <path
                          d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z"
                          fill="currentColor"
                        />
                      </svg>
                    }
                    onValueChange={setEmailValue}
                  />
                  <Input
                    type="number"
                    variant="bordered"
                    label="Copies"
                    className="text-white"
                    placeholder="1"
                    value={nCopies}
                    isClearable
                    onValueChange={setNCopies}
                  />
                  <RadioGroup
                    label="Priority"
                    value={selectedPriority}
                    onValueChange={setSelectedPriority}
                  >
                    <PriorityRadio value="normal" description="Standard queueing for your document">Normal</PriorityRadio>
                    <PriorityRadio value="priority" description="Accelerated queuing, costs 10% more">Priority</PriorityRadio>
                  </RadioGroup>
                </div>
                <NextUIButton variant='bordered' className='text-white' type='submit'>
                  Submit order
                </NextUIButton>
              </div>
            </form>
          ) :
            (
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-white text-xl mt-20">Coming soon...</h1>
                <p className="text-white text-md mt-10">We &apos; re working on bringing this service online.</p>
                <p className="text-white text-md"> Please use the button above to contact us</p>
              </div>
            )
        }
      </div >
    </div >
  )
}