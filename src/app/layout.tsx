import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { Josefin_Sans} from "next/font/google";
export const metadata = {
  title: "Glammy Website",
  description: "A shoppify e-commerce website",
}
const josefin = Josefin_Sans({ subsets:["latin"],  weight:"400"})
console.log(josefin);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="__className_60a1d8">
        <nav>
          <Navbar />
        </nav>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
