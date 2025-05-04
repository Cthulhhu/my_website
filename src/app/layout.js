// src/app/layout.js
import './globals.css'
import './animations.css'

export const metadata = {
  title: 'Amin Nassraoui - Portfolio',
  description: 'Front-end developer portfolio showcasing clean and expressive digital experiences.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <main>{children}</main>
      </body>
    </html>
  )
}