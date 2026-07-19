import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "./providers";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
import "bootstrap/dist/css/bootstrap.min.css";
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
  metadataBase: SITE_URL,
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "The Silver Guardian builds community support for innovative pediatric care, hockey-related wishes, fundraising, and movement therapy initiatives.",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Nonprofit and community support",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL.origin}/#organization`,
      name: SITE_NAME,
      url: SITE_URL.origin,
      email: "team@thesilverguardian.com",
      description:
        "A community initiative supporting innovative pediatric care, hockey-related wishes, fundraising, and movement therapy.",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "general inquiries",
        email: "team@thesilverguardian.com",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL.origin}/#website`,
      url: SITE_URL.origin,
      name: SITE_NAME,
      inLanguage: ["en-US", "fr-CA"],
      publisher: { "@id": `${SITE_URL.origin}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
      </head>
      <body className="min-h-full">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
