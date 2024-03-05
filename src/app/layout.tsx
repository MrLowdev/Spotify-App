import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/providers/ToastProvider";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import getActiveProductsWithPrices from "@/actions/getActiveProductsWithPrices";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify-clone",
  description: "This is a musing streaming platform",
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const products = await getActiveProductsWithPrices();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider products={products} />
            {children}
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
