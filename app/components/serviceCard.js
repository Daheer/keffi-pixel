import Link from "next/link";

export function ServiceCard({ title, service, price, image }) {
  return (
    <Link href={`/${service}`} style={{ textDecoration: 'none' }}>
      <div style={{ backgroundImage: `url(${image})` }} className="flex flex-col text-white text-md md:text-md lg:text-xl items-center justify-center lg:w-72 lg:h-72 md:w-60 md:h-60 sm:w-48 sm:h-48 w-48 h-48 rounded-lg shadow-lg">
        <h1 className="font-semibold">{title}</h1>
        {price !== "TBD" ? (
          <p className="text-center">Price: ₦{price}/unit</p>
        ) : (
          <p className="text-center">TBD</p>
        )}
      </div>
    </Link>
  )
}