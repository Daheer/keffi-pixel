import { Inter } from 'next/font/google'
import './globals.css'
import { NavBar } from './components/navbar'
import CircleStdFont from "next/font/local"
import { Toaster } from "react-hot-toast";

export const CircleStdFontStyle = CircleStdFont({ src: '../font/CircularStd-Book.ttf' })

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Keffi Pixel Press',
  description: 'Keffi Pixel Press is a digital printing agency based in Keffi, Nigeria.',
  creator: 'Dahiru Ibrahim',
  icons: {
    'icon': '/logo.svg',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-indigo-900'>
      <body className={inter.className}>
        <div className={CircleStdFontStyle.className}>
          <NavBar />
          <Toaster position="top-center" />
          {children}
        </div>
      </body>
    </html >
  )
}
