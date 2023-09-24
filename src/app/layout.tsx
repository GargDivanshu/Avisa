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
   

      <body className={`${poppins.variable}`}>
      {/* <pre
      className="ascii-art"
      ># _____   _                           _               _____                                                                                                  
|  __ \ (_)                         | |             / ____|                                                                                                 
| |  | | _ __   __ __ _  _ __   ___ | |__   _   _  | |  __   __ _  _ __  __ _                                                                               
| |  | || |\ \ / // _` || '_ \ / __|| '_ \ | | | | | | |_ | / _` || '__|/ _` |                                                                              
| |__| || | \ V /| (_| || | | |\__ \| | | || |_| | | |__| || (_| || |  | (_| |                                                                              
|_____/ |_|  \_/  \__,_||_| |_||___/|_| |_| \__,_|  \_____| \__,_||_|   \__, |                                                                              
     _  _                           _                                    __/ |_  __  ____                                     _  _                          
    | |(_)                         | |                                  |___/_ |/_ ||___ \    ____                           (_)| |                         
  __| | _ __   __ __ _  _ __   ___ | |__   _   _     __ _   __ _  _ __  __ _ | | | |  __) |  / __ \   __ _  _ __ ___    __ _  _ | |    ___  ___   _ __ ___  
 / _` || |\ \ / // _` || '_ \ / __|| '_ \ | | | |   / _` | / _` || '__|/ _` || | | | |__ <  / / _` | / _` || '_ ` _ \  / _` || || |   / __|/ _ \ | '_ ` _ \ 
| (_| || | \ V /| (_| || | | |\__ \| | | || |_| | _| (_| || (_| || |  | (_| || | | | ___) || | (_| || (_| || | | | | || (_| || || | _| (__| (_) || | | | | |
 \__,_||_|  \_/  \__,_||_| |_||___/|_| |_| \__,_|(_)\__, | \__,_||_|   \__, ||_| |_||____/  \ \__,_| \__, ||_| |_| |_| \__,_||_||_|(_)\___|\___/ |_| |_| |_|
                                                     __/ |              __/ |                \____/   __/ |                                                 
                                                    |___/              |___/                         |___/                                                  #</pre> */}
        
        {children}</body>
    </html>
  )
}
