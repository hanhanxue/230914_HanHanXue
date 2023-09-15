import '@/styles/main.scss'

import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Han Han Xue ▼ Product Designer',
  description: 'Designer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
