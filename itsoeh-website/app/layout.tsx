import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ITSOEH - Instituto Tecnológico Superior del Occidente del Estado de Hidalgo",
  description: "Sitio web institucional del Instituto Tecnológico Superior del Occidente del Estado de Hidalgo",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <main className="min-h-screen bg-gray-50">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
