import '@/styles/main.scss'
import Header from '@/components/global/Header'

import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Han Han Xue',
  description: 'Product Designer. Creative Technologist.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />

        {children}
        </body>
    </html>
  )
}