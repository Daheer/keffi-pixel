import { images } from "./images";
import { Image } from "@nextui-org/image";
export default function Page() {
  return (
    <div className="p-5 md:p-10">
      <div className="text-white/80 columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
        {images.map((image, index) => (
          <div key={index}>
            <Image isBlurred src={image.src} alt={image.caption || `Image ${index}`} />
            {image.caption && <p>{image.caption}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}