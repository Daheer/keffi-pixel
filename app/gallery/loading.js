import { Spinner } from "@nextui-org/react";

export default function Loading() {

  return (
    <div className="flex flex-col justify-center bg-gradient-to-b from-gray-900 via-gray-900 to-indigo-900 items-center min-h-screen min-w-screen">
      <Spinner
        color="primary"
        size="lg"
      />
    </div>
  )
}