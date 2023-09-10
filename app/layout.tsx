import '@/scss/main.scss'
import { Analytics } from '@vercel/analytics/react'
import { clsx } from 'clsx'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cuzknothz - Web developer based in Vietnam',
  description: 'Cuzknothz - Web developer based in Vietnam',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={clsx(inter.className, 'font-cuz font-medium uppercase')}
        suppressHydrationWarning={true}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
