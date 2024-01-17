import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Providers from './provider'
import Footer from '../components/Footer'
import Slide from "../components/Slide"
import AnimatedLayout from "../components/AnimatedLayout";



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gamma Net',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className={`${inter} overflow-x-hidden`}>
      <AnimatedLayout>
        <Providers>
        <Navbar/>
          <Slide/>
          {children}
          <Footer/>
        </Providers>
        </AnimatedLayout>
        </body>
    </html>
  )
}
