import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/commons/header";
import Footer from "./components/commons/footer";

const fredoka = localFont({
  src: "./fonts/fredoka-one-regular.ttf",
});

const readex = Readex_Pro({
  variable: "--font-readex-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "S.O.S Vida Animal",
  description:
    "A OSCIP (Organização da Sociedade Civil de Interesse Público) SOS Vida Animal é uma organização da sociedade civil, de direito privado, sem fins lucrativos e de caráter associativo | Promover e estimular ações no sentido de conservar e defender a população animal na cidade de Londrina e região | Ajude-nos a ajudar quem não tem voz para ser ouvido, os animais abandonados! Doações: Banco Itaú, Agência 4019, Conta Corrente 07820-5.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fredoka.className} ${readex.variable} antialiased `}>
        <div className="bg-white">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
