import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { motion, useInView, useAnimate } from "framer-motion";
import { useEffect, useRef } from "react";

export function ServiceCard({ title, service, price, image }) {
  const [scope, animate] = useAnimate()
  const motionDiv = useRef(null)
  const isInView = useInView(motionDiv)


  useEffect(() => {
    if (isInView) {
      animate("div", { y: -10 }, { duration: 0.25, ease: "linear" })
    } else {
      animate("div", { y: 0 }, { duration: 0 })
    }
  }, [isInView, animate])
  return (
    <div ref={scope}>
      <div ref={motionDiv}>
        <Card
          isFooterBlurred
          radius="lg"
          className="border-none bg-transparent"
        >
          <Image
            alt={title}
            className="object-cover"
            isZoomed
            height={300}
            src={`${image}`}
            width={250}
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80">{title}</p>
            <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
              ₦{price}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>

  );
}
