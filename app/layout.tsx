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
    default: "Cheesecake 🧀",
    template: "%s | Cheesecake 🧀",
  },

  description:
    "A handcrafted birthday experience filled with memories, surprises, and love.",

  applicationName: "Cheesecake",

  authors: [
    {
      name: "Ekansh",
    },
  ],

  creator: "Ekansh",

  keywords: [
    "Cheesecake",
    "Birthday",
    "Birthday Gift",
    "Memories",
    "Photo Album",
    "Special Surprise",
  ],

  metadataBase: new URL("https://cheesecake19.vercel.app/"),

  openGraph: {
    title: "Cheesecake 🧀",

    description:
      "A handcrafted birthday experience filled with memories, surprises, and love.",

    url: "https://cheesecake19.vercel.app/",

    siteName: "Cheesecake",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cheesecake 🧀",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Cheesecake 🧀",

    description:
      "A little effort from me to make your birthday special. Happy Birthday, babu!!",

    images: ["/og-image.png"],
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
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
