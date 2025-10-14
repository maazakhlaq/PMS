import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import { redirect } from "next/navigation";
import { ReduxProvider } from "./ReduxProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Patient Management System",
  description: "Patient Management System FrontEnd UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
 
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <ReduxProvider>   <div className="flex flex-col bg-white h-screen overflow-hidden ">
          <Header />
          <div className="flex flex-1 overflow-hidden">
            <Sidebar />
            <main className="flex-1 overflow-x-auto">
              <div className="h-full overflow-hidden ">{children}</div>
            </main>
          </div>
        </div></ReduxProvider>
      </body>
    </html>
  );
}
