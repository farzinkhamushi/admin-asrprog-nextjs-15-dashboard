"use client";
import { ThemeProvider, useThemeDark } from "@/components/contexts/theme-toggler-context";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

/*
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
*/

interface IClientRootLayoutProps {
  children: React.ReactNode;
}

function ClientRootLayoutInner({ children }: IClientRootLayoutProps) {
  const { isThemeDark } = useThemeDark();

  return (
    <html lang="en">
      <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
      </head>
      <body className={isThemeDark ? "" : "dark"}>
        {children}
      </body>
    </html>
  );
}

export default function ClientRootLayout({ children }: IClientRootLayoutProps) {
  return (
    <ThemeProvider>
      <ClientRootLayoutInner>
        {children}
      </ClientRootLayoutInner>
    </ThemeProvider>
  );
}