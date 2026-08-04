import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Avalon20",
    template: "%s | Avalon20",
  },

  description:
    "A handcrafted birthday experience filled with memories, surprises, and love.",

  applicationName: "Avalon20",

  authors: [
    {
      name: "Ekansh",
    },
  ],

  creator: "Ekansh",

  keywords: [
    "Avalon20",
    "Birthday",
    "Birthday Gift",
    "Memories",
    "Photo Album",
    "Special Surprise",
  ],

  // Replace this after deployment
  metadataBase: new URL("https://avalon20.vercel.app/"),

  openGraph: {
    title: "Avalon20",
    description:
      "A handcrafted birthday experience filled with memories, surprises, and love.",

    url: "https://avalon20.vercel.app/",

    siteName: "Avalon20",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Avalon20",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Avalon20",

    description:
      "A handcrafted birthday experience filled with memories, surprises, and love.",

    images: ["/og-image.png"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],

    apple: "/apple-touch-icon.png",

    shortcut: "/favicon.ico",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-screen overflow-hidden antialiased`}
    >
      <body
        suppressHydrationWarning
        className="h-screen w-full overflow-hidden m-0 p-0"
      >
        {children}
      </body>
    </html>
  );
}
