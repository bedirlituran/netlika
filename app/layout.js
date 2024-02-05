// pages/_app.js

import { Inter } from 'next/font/google';
import Head from 'next/head';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/Whatsapp';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Gamma Net',
  description: 'tv provayder',
  
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <Link rel="icon" href="/image/logo.webp"></Link>
      </Head>
        <body className={`${inter} flex-col justify-between`}>
          <Navbar />
          {children}
          <WhatsAppButton />
          <Footer />
        </body>
      </html>
    </>
  );
}
