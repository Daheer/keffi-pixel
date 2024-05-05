"use client";

import { useRef } from "react";
import React from "react";
import { ServiceCard } from "./components/card";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Button, Modal, ModalBody, ModalContent, ModalHeader, ModalFooter, useDisclosure } from "@nextui-org/react";
import Link from "next/link";
import { cn } from "./utils/cn";
import { PageWrapper, PillAnimation1, PillAnimation2, PillAnimation3 } from "./page-wrapper";

export default function Home() {
  const ref = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState("blur");

  const handleOpen = (backdrop) => {
    setBackdrop(backdrop);
    onOpen();
  };
  return (
    <Parallax pages={3} ref={ref} >
      <ParallaxLayer speed={2}>
        <section>
          <div className="bg-black text-white py-32">
            <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
              <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
                <PageWrapper>
                  <h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">
                    KeffiPixel
                  </h1>
                </PageWrapper>
                <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
                  Press : Pristine Printing
                </h2>
                <p className="text-sm md:text-base text-gray-50 mb-4">
                  Unleash your creative vision. Fast, affordable, and top-notch quality.
                </p>
                <a
                  href="#services"
                  className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
                  onClick={() => ref.current.scrollTo(1)}
                >
                  Explore Services
                </a>
              </div>
              <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center">
                <div className="h-48 flex flex-wrap content-center">
                  <PillAnimation1>
                    <img
                      className="inline-block mt-28 hidden xl:block"
                      src="/printing-pill-resized.png"
                      alt=""
                    />
                  </PillAnimation1>
                  <PillAnimation2>
                    <img
                      className="inline-block mt-24 md:mt-0 p-8 md:p-0"
                      src="/billboard-pill-resized.png"
                      alt=""
                    />
                  </PillAnimation2>
                  <PillAnimation3>
                    <img
                      className="inline-block mt-28 hidden lg:block"
                      src="/mug-pill-resized.png"
                      alt=""
                    />
                  </PillAnimation3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ParallaxLayer>
      <ParallaxLayer offset={0.8} speed={0.001} factor={0.1}>
        <div className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent border-white/[0.2] rounded-full bg-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
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
      </ParallaxLayer>
      <ParallaxLayer offset={1}>
        <span class="relative flex justify-center">
          <div
            class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
          ></div>
          <span class="relative z-10 bg-gray-900 p-4 rounded-full text-white px-6">Choose a service</span>
        </span>
        <div style={{ overflowY: 'auto', scrollbarWidth: 'none', height: '100vh' }}>
          <section>
            <div className="flex flex-col items-center justify-center mt-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                <Link href={`/service/a4_card`} style={{ textDecoration: 'none' }}>
                  <ServiceCard title="A4 Card" service="a4_card" price="100" image="/a4_card.jpeg" />
                </Link>
                <Link href={`/service/a3_card`} style={{ textDecoration: 'none' }}>
                  <ServiceCard title="A3 Card" price="160" image="/a3_card.jpeg" />
                </Link>
                <Link href={`/service/a4_paper`} style={{ textDecoration: 'none' }}>
                  <ServiceCard title="A4 Paper" price="80" image="/a4_paper.jpeg" />
                </Link>
                <Link href={`/service/a3_paper`} style={{ textDecoration: 'none' }}>
                  <ServiceCard title="A3 Paper" price="120" image="/a3_paper.jpeg" />
                </Link>
                <Link href={`/service/id_card`} style={{ textDecoration: 'none' }}>
                  <ServiceCard title="ID Card" price="500" image="/id_card.jpeg" />
                </Link>
                <Link href={`/service/shirt_brand`} style={{ textDecoration: 'none' }}>
                  <ServiceCard title="Shirt Branding" price="5000" image="/shirt_branding.jpeg" />
                </Link>
                <Link href={`/service/cup_brand`} style={{ textDecoration: 'none' }}>
                  <ServiceCard title="Cup Branding" price="5000" image="/cup_branding.jpeg" />
                </Link>
                <Link href={`/service/jersey`} style={{ textDecoration: 'none' }}>
                  <ServiceCard title="Jersey Customization" price="4500" image="/jersey.jpeg" />
                </Link>
                <Link href={`/service/magic_cup`} style={{ textDecoration: 'none' }}>
                  <ServiceCard title="Magic Cup" price="7000" image="/magic_cup.jpeg" />
                </Link>
                <Link href={`/service/plate_brand`} style={{ textDecoration: 'none' }}>
                  <ServiceCard title="Plate Branding" price="---" image="/plates.jpeg" />
                </Link>
                <Link href={`/service/calendar`} style={{ textDecoration: 'none' }}>
                  <ServiceCard title="Calendars" price="---" image="/calendar.jpeg" />
                </Link>
                <Link href={`/service/banner`} style={{ textDecoration: 'none' }}>
                  <ServiceCard title="Banners" price="---" image="/banner.jpeg" />
                </Link>
                <Link href={`/service/sticker`} style={{ textDecoration: 'none' }}>
                  <ServiceCard title="Sticker" price="---" image="/sticker.jpeg" />
                </Link>
                <Link href={`/service/iv_card`} style={{ textDecoration: 'none' }}>
                  <ServiceCard title="Invitation Card" price="---" image="/invitation_card.jpeg" />
                </Link>
                <Link href={`/service/web_graphics`} style={{ textDecoration: 'none' }}>
                  <ServiceCard title="Web Design & Graphics" price="---" image="/logo.png" />
                </Link>
              </div >
            </div>
          </section>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={2.5} speed={0.01}>
        <footer class="bg-gray-50 bg-gray-900">
          <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div class="sm:flex sm:items-center sm:justify-between">
              <div class="flex justify-center text-teal-600 sm:justify-start text-teal-300">
                <img src="/logo.svg" className="mr-3 h-6 sm:h-9" alt="Keffi Pixel Press Logo" />
              </div>
              <p class="mt-4 text-center text-sm bg-transparent lg:mt-0 lg:text-right text-white/80">
                Copyright &copy; 2022. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </ParallaxLayer>
    </Parallax >
  )
}
