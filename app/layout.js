import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'HGenix Solutions - IT Company in Jodhpur, Rajasthan',
    template: '%s | HGenix Solutions'
  },
  description: 'HGenix Solutions is a leading IT company in Jodhpur, Rajasthan with 5+ years experience. We provide web development, mobile apps, cloud solutions, cybersecurity, and digital marketing services.',
  keywords: 'IT company Jodhpur, web development Rajasthan, mobile app development India, cybersecurity solutions, cloud computing, digital marketing',
  authors: [{ name: 'HGenix Solutions' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hgenix.com',
    siteName: 'HGenix Solutions',
    title: 'HGenix Solutions - Leading IT Company in Jodhpur, Rajasthan',
    description: 'Professional IT services including web development, mobile apps, cloud solutions, and cybersecurity with 5+ years experience and 45+ successful projects.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}