import './globals.css'
import type { Metadata } from 'next'
import { Karla } from 'next/font/google'
import NavBar from './components/Layout/NavBar'

const karla = Karla({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Train Your Reflexes',
  description: 'A Website to Train Your Reflexes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={karla.className}>
        <main className="flex md:w-full lg:w-[65%] flex-col items-center text-white my-8 mx-auto text-xl">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  )
}
