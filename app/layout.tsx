import type React from "react"
import type { Metadata } from "next"
import { Inter, Exo_2 } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], weight: ["600"], style: ["normal", "italic"] })
const exo2 = Exo_2({ subsets: ["latin"], weight: ["400"], style: ["normal", "italic"] })

// 🎯 CUSTOMIZE: Update your metadata here
export const metadata: Metadata = {
  title: "zextrah",
  description: "?",
  openGraph: {
    title: "zextrah",
    description: "?",
    type: "website",
    url: "https://zextrah.com",
    images: [
      {
        url: "/professional-headshot.png",
        width: 1200,
        height: 675,
        alt: "Profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "zextrah",
    description: "?",
  },
  icons: {
    icon: "/favicon.jpg",
    apple: "/apple-touch-icon.jpg",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${exo2.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
