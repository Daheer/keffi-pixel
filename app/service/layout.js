"use client";

import React from "react";
import { cn } from "../utils/cn";
import Link from "next/link";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Button, useDisclosure } from "@nextui-org/react";

export default function DashboardLayout({
  children,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState("blur");

  const handleOpen = (backdrop) => {
    setBackdrop(backdrop);
    onOpen();
  };
  return (
    <section>
      <div className={cn(
        "flex max-w-fit relative top-10 mb-12 inset-x-0 mx-auto border border-transparent border-white/[0.2] rounded-full bg-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
      )}>
        <Link
          href="/"
          className={cn(
            "relative text-neutral-50 items-center flex space-x-1 text-neutral-600 hover:text-neutral-300"
          )}
        >
          <span className="block sm:hidden"><img src="/logo.svg" className="mr-3 h-6 sm:h-9" alt="Keffi Pixel Press Logo" /></span>
          <span className="hidden sm:block text-sm">Home</span>
        </Link>
        <div
          className={cn(
            "relative text-neutral-50 items-center flex space-x-1 text-neutral-600 hover:text-neutral-300 hover:cursor-pointer"
          )}
          onClick={() => handleOpen("blur")}
        >
          <span className="block sm:hidden"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></span>
          <span className="hidden sm:block text-sm">Contact</span>
        </div>
        <Link href="/gallery" style={{ textDecoration: 'none' }}>
          <button className="border text-sm font-medium relative border-neutral-200 border-white/[0.2] text-white px-4 py-2 rounded-full">
            <span>Gallery</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
          </button>
        </Link>
        <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
          <ModalContent className="text-white bg-gradient-to-b from-gray-900 via-gray-900 to-indigo-900">
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1"></ModalHeader>
                <ModalBody>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    +234 816 799 8561
                    <br />
                    +234 814 711 6750
                    <br />
                    <br />
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    keffi.pixel.press@gmail.com
                    <br />
                    <br />
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 12H16c-.7 2-2 3-4 3s-3.3-1-4-3H2.5" /><path d="M5.5 5.1L2 12v6c0 1.1.9 2 2 2h16a2 2 0 002-2v-6l-3.4-6.9A2 2 0 0016.8 4H7.2a2 2 0 00-1.8 1.1z" /></svg>
                    Office 3, Yaro Sule Filling Station, Opposite FMC Keffi.
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
      <nav></nav>

      {children}
    </section>
  )
}