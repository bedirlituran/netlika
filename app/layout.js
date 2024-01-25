import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/Whatsapp'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gamma Net',
  description: 'tv provayder',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className={`${inter} oveflow-x-hidden`}>
      
        <Navbar/>
          {children}
          <WhatsAppButton />
          <Footer/>        
        </body>
    </html>
  )
}
