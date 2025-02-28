
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/Whatsapp'



export const metadata = {
  title: 'Gamma Net',
  description: 'Internet ve Tv Sirketi',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='font-turan'>
      <body>
        <Navbar/>
          {children}
          <Footer/>
          <WhatsAppButton/>
        </body>
    </html>
  )
}