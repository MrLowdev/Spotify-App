import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/providers/ToastProvider";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import getActiveProductsWithPrices from "@/actions/getActiveProductsWithPrices";
import Sidebar from "@/components/sidebar/Sidebar";
import getSongsByUserId from "@/actions/getSongsByUserId";
import Player from "@/components/home/Player";

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
  const userSongs = await getSongsByUserId();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider products={products} />
            <Sidebar songs={userSongs}> {children}</Sidebar>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
