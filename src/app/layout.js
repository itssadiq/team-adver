import { Anton } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

export const metadata = {
  title: "Team Adver",
  description: "Best Marketing agency in Karachi, Pakistan",
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
        className={`${anton.variable} font-satoshi bg-agency-light text-agency-dark antialiased relative`}
      >
        {/* Global Optimized Noise Texture Overlay */}
        <div
          className="fixed inset-0 z-50 opacity-[0.03] pointer-events-none mix-blend-overlay"
          style={{
            transform: "translateZ(0)",
            willChange: "transform",
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='globalNoiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23globalNoiseFilter)'/%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />
        {children}
      </body>
    </html>
  );
}
