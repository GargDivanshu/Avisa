import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Avisa',
  description: 'Health is a state of physical, mental, and social well-being that enables everyone to live productively',
  icons: {
    icon: "public/Avisa-Logo-noname.ico"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     
      <body className={`${poppins.variable}`}>{children}</body>
    </html>
  )
}
