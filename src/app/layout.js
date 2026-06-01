import { Anton } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

export const metadata = {
  title: "Agency Website",
  description: "Built with Next.js and Tailwind CSS v4",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Import Satoshi Font from Fontshare */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900,400i,500i,700i,900i&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${anton.variable} font-satoshi bg-agency-light text-agency-dark antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
