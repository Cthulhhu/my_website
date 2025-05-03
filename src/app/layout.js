import '../styles/globals.css'
import Header from '../components/Header'

export const metadata = {
  title: 'Amin Nassraoui - Portfolio',
  description: 'Front-end developer portfolio showcasing clean and expressive digital experiences.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}