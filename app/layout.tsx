import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav/Nav"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smahh Cybersecurity and IT solutions",
  description: "At Smahh, we specialize in a range of services including cybersecurity consultancy, risk assessments, incident reporting, and professional training. Our expert team is committed to delivering customized solutions that address the unique challenges faced by our clients, ensuring their digital assets are secure and their IT infrastructure is robust.",
  icons:{
    icon: "/ico.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Nav />
        <main className="p-0 m-0 overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
