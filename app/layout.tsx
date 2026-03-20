import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stellar Lottery | Decentralized Gaming',
  description: 'Play the decentralized lottery on Stellar blockchain. Buy tickets with XLM and win big.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  )
}
