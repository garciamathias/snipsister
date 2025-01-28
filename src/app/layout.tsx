import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AosInit from '@/components/AosInit';

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Snip Sister - Hair Salon in Cairns",
  description: "Your premium hair salon in Cairns, Australia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${playfair.variable}`}>
        <AosInit />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
