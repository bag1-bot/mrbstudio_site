import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ 
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MRB STUDIO - Разработка IT решений',
  description: 'Разработка Telegram ботов, сайтов и приложений.',
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
