import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CartProvider from "./components/Providers";
import ShoppingCartModal from "./components/ShoppingCartModal";

const alexBrush = localFont({
  src: "./fonts/AlexBrush-Regular.ttf",
  variable: "--font-alex-brush",
});

export const metadata: Metadata = {
  title: "LA MOLINA | CIOCCOLATO",
  description: "Creatively designed chocolate products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon2.png" />
      </head>
      <body className={`${alexBrush.variable} antialiased`}>
        <CartProvider>
          <NavBar />
          <ShoppingCartModal />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
