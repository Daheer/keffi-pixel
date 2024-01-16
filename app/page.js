import { ServiceCard } from "./components/serviceCard";
import { ScrollShadow } from "@nextui-org/react";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <p className="text-white text-xl">Choose a service</p>
      </div>
      <div className="flex flex-col items-center justify-center mt-10">
        <ScrollShadow hideScrollBar size={200} className="w-fit h-[600px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <ServiceCard title="Print on A4 Paper" service="print_on_a4_paper" price="80" image="/pattern1.png" />
            <ServiceCard title="Print on A4 Card" service="print_on_a4_card" price="120" image="/pattern2.png" />
            <ServiceCard title="Print on A3 Paper" service="print_on_a3_paper" price="160" image="/pattern3.png" />
            <ServiceCard title="Print on A3 Card" service="print_on_a3_card" price="240" image="/pattern4.png" />
            <ServiceCard title="ID Card" service="print_id_card" price="350" image="/pattern5.png" />
            <ServiceCard title="Business Cards" service="print_business_card" price="20" image="/pattern6.png" />
            <ServiceCard title="Banners" service="print_banner" price="TBD" image="/pattern7.png" />
            <ServiceCard title="Invitation Cards" service="print_iv_card" price="TBD" image="/pattern8.png" />
            <ServiceCard title="Flyers" service="print_flyer" price="TBD" image="/pattern9.png" />
            <ServiceCard title="Calendars" service="print_calendar" price="TBD" image="/pattern10.png" />
            <ServiceCard title="Jotters" service="print_jotter" price="TBD" image="/pattern11.png" />
            <ServiceCard title="Calendars" service="print_calendar" price="TBD" image="/pattern12.png" />
            <ServiceCard title="Web & Graphics Design" service="web_graphics" price="TBD" image="/pattern13.png" />
            <ServiceCard title="Stickers" service="print_sticker" price="TBD" image="/pattern14.png" />
          </div>
        </ScrollShadow>
      </div>
    </div >
  )
}
