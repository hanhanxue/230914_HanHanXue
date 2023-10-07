import '@/styles/main.scss'
import Header from '@/components/global/Header'

import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Han Han Xue',
  description: 'Product Designer & Creative Technologist',
  creator: 'Han Han Xue',


  openGraph: {
    title: 'Han Han Xue',
    description: 'Product Designer & Creative Technologist',
    url: 'https://www.hanhanxue.com/',
    siteName: 'Han Han Xue',
    images: [
      {
        url: 'https://www.dropbox.com/scl/fi/meqxhq8hqly4zxx7fm71d/hanhanxue_og.png?rlkey=979v97gzn1jk64xrlpysus6qv&raw=1',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
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
