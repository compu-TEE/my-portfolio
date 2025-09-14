export const dynamic = 'force-static'
import './globals.css'

import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight: ['400','500','600','700'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['400','500','600','700'] })
const fontClasses = `${inter.className} ${poppins.className} antialiased`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={fontClasses}>
        <div suppressHydrationWarning>
          {children}
        </div>
      </body>
    </html>
  )
}




