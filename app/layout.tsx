import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unine",
  description: "More Payment Options Better than Cash",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="lato-regular"
      >
        {children}
      </body>
    </html>
  );
}
