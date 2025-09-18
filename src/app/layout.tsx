import type React from "react"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EaPro - Top Solar Inverter, Battery & Panel Manufacturer",
  description:
    "EaPro is a global leader in solar inverters and clean energy solutions, known for innovation, quality, and futuristic designs.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
      {children}  
      </body>
    </html>
  )
}
