import type { Metadata } from "next";
import "./_styles/globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SBT Global - Technology & Global Commerce",
  description:
    "SBT Global, headquartered in Texas, represents a dynamic nexus of technology and global commerce . As a multifaceted organization, we are at the vanguard of connecting markets, empowering individuals, and fostering economic development worldwide .",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
