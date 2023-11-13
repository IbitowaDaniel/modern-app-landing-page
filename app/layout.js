import "./globals.css";
import { Header, Hero, Footer } from "./sections";
import { BannerBg } from "./assets";
import Image from "next/image";



export const metadata = {
  title: 'Modern App Page',
  description: 'A Nextjs App landing page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <div id="home" className="heroDiv">
          <Image
            src={BannerBg}
            alt=""
            className="backgroundImgStyles"
          />
          <Header />
          <Hero />
        </div>
        {children}
        <Footer />

      </body>
    </html>
  )
}
