import type { Metadata } from "next";
import { Inter, Outfit, Geist } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LUMINA | Modern Salon & Wellness",
  description: "Experience premium beauty and wellness services with Lumina. Book your transformation today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={cn("scroll-smooth", inter.variable, outfit.variable, "font-sans", geist.variable)}>
        <body className="min-h-screen bg-background font-sans antialiased selection:bg-primary/20">
          <main className="relative flex min-h-screen flex-col">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
