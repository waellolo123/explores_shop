import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Navbar from './components/nav/Navbar'
import Footer from './components/footer/Footer'
import CartProvider from '@/providers/CartProvider'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Explores',
  description: 'Explores is all you need about running events',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} text-slate-700`}>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className='flex-grow'>{children}</main>
          <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  )
}


