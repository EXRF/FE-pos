import { Outfit } from 'next/font/google';
import './globals.css';
import { Toaster } from "sonner";

import { SidebarProvider } from '@/context/SidebarContext';
import { ThemeProvider } from '@/context/ThemeContext';

const outfit = Outfit({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} dark:bg-gray-900`}>
        <ThemeProvider>
          <SidebarProvider>
            {children}
            <Toaster position="top-right" richColors />
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
