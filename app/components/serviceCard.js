import Link from "next/link";

export function ServiceCard({ title, service, price, image }) {
  return (
    <Link href={`/${service}`} style={{ textDecoration: 'none' }}>
      <div style={{ backgroundImage: `url(${image})` }} className="flex flex-col items-center justify-center w-72 h-72 rounded-lg shadow-lg">
        <h1 className="text-2xl text-white font-semibold">{title}</h1>
        {price !== "TBD" ? (
          <p className="text-md text-white text-center">Price: ₦{price}/unit</p>
        ) : (
          <p className="text-md text-white text-center">TBD</p>
        )}
      </div>
    </Link>
  )
}