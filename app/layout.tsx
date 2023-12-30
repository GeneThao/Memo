import { Toaster } from "sonner"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { ConvexClientProvider } from '@/components/providers/convex-provider'
import { ModalProvider } from "@/components/providers/modal-provider"
import { EdgeStoreProvider } from "@/lib/edgestore"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Memo',
  description: 'I built this for my girlfriend',
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url:"/memo-light.ico",
        href:"/memo-light.ico"
      },
      {
        media: "(prefers-color-scheme: dark)",
        url:"/memo-dark.ico",
        href:"/memo-dark.ico"
      },
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <EdgeStoreProvider>
          <ThemeProvider attribute='class' defaultTheme="system" enableSystem disableTransitionOnChange storageKey="memo-theme-2">
          <Toaster position="bottom-center"/>
          <ModalProvider />
          {children}
          </ThemeProvider>
          </EdgeStoreProvider>
        </ConvexClientProvider>
      </body>
    </html>
  )
}
