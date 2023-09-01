import Navbar from './Navbar/page'
import './globals.css'
import { Inter } from 'next/font/google'
import 'rsuite/dist/rsuite.min.css';
import Footer from './Footer/page';






const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Santosh Alimkar- personal portfolio',
  description: 'welcome to my world',
}

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className=''>
      <Navbar/>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
