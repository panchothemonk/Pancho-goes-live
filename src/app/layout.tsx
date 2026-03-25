import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PANCHO | The Angriest Monkey In Crypto",
  description:
    "From viral moments to real-world chaos. Pancho is more than a brand — he's a movement. Explore the Panchoverse.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="noise min-h-full flex flex-col">{children}</body>
    </html>
  );
}
