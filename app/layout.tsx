import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Antonio Alonso — Arquitecto de TI & Backend Engineer";
const description =
  "Arquitecto de TI en Macropay. Diseño arquitecturas backend escalables para operaciones financieras y comerciales en múltiples países. Java, NestJS y AWS.";

export const metadata: Metadata = {
  metadataBase: new URL("https://antonioalonso.com.mx"),
  title,
  description,
  authors: [{ name: "Antonio Alonso" }],
  keywords: [
    "Antonio Alonso",
    "Arquitecto de TI",
    "Arquitecto de software",
    "Backend Engineer",
    "Java",
    "NestJS",
    "AWS",
    "Mérida",
  ],
  openGraph: {
    type: "profile",
    locale: "es_MX",
    url: "/",
    siteName: "Antonio Alonso",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
