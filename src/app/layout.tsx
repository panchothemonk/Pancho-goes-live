import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PANCHO — sin ganas. still here.",
  description:
    "the degen monkey in all of us. from viral memes to real products — trading bots, prediction arenas, and a token that pays you back. the panchoverse is here.",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
