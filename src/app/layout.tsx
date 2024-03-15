import '@/styles/main.scss'

import type { Metadata } from 'next'

import Header from '@/components/global/Header'
import Footer from '@/components/global/Footer'


export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),

  title: 'Han Han Xue — Product Designer',
  description: 'The website and design portfolio of Han Han Xue.',
  creator: 'Han Han Xue',


  openGraph: {
    title: 'Han Han Xue — Product Designer',
    description: 'The website and design portfolio of Han Han Xue.',
    url: 'https://www.hanhanxue.com/',
    siteName: 'Han Han Xue — Product Designer',
    images: [
      {
        url: 'https://www.dropbox.com/scl/fi/nu72y40kxcgpza909k8yw/hanhanxue_og_shadow.png?rlkey=5qd1u1g1ehnf0zii6xzhu03u4&raw=1',
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

        <Footer />
      </body>
    </html>
  )
}
