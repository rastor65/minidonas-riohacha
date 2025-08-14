import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const sourceSans = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-source-sans",
})

export const metadata: Metadata = {
  title: "Mini Donas Riohacha - Sabor del Caribe",
  description: "Mini donas artesanales hechas con amor en Riohacha. Descubre el sabor del Caribe en cada bocado.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${sourceSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
