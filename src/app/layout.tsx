import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "../styles/globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'], // Adjust the weights as per your design
});

export const metadata: Metadata = {
  title: "PetSoft -Pet daycare software",
  description: "Take care of people's pets responsibly with PetSoft",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased  min-h-screen text-sm  bg-background/50 text-secondary `}>
        {children}
      </body>
    </html>
  );
}
