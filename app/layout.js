import { Inter } from 'next/font/google'
import './globals.css'
import { NavBar } from './components/navbar'
import CircleStdFont from "next/font/local"
import { Toaster } from "react-hot-toast";

export const CircleStdFontStyle = CircleStdFont({ src: '../font/CircularStd-Book.ttf' })

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Keffi Pixel Press',
  description: 'Keffi Pixel Press is a digital agency based in Keffi, Nigeria. We offer pristine printing services.',
  creator: 'Dahiru Ibrahim',
  icons: {
    'icon': '/logo.png',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-indigo-900'>
      <body className={inter.className}>
        <div className={CircleStdFontStyle.className}>
          <NavBar />
          <Toaster position="bottom-center" />
          {children}
        </div>
      </body>
    </html >
  )
}
