import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "RheumaDoc - Dr. Raghavendra H",
  description: "Rheumatologist and Nephrologist in Bangalore - Book appointment with Dr. Raghavendra H",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        {/* Top Header Bar */}
        <div className="w-full py-2 sm:py-2.5 text-center" style={{ backgroundColor: '#D4F2F1' }}>
          <p className="text-xs sm:text-sm" style={{
            fontFamily: "'usual', Arial, Helvetica, sans-serif",
            fontWeight: 600,
            lineHeight: '20px',
            color: 'rgb(24, 36, 57)'
          }}>
            Now accepting new patients — Book your consultation today
          </p>
        </div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
