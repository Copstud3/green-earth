import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Green earth",
  description: "Made with NextJS and tailwindcss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
