import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Ola Mummy Bright Barbering Salon | Ibadan",
  description: "Premium barbering, cuts, locs, tinting and clipper servicing in Ibadan, Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans bg-black text-white antialiased flex flex-col min-h-screen selection:bg-white selection:text-black">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
