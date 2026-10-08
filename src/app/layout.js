import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import FloatingActions from "@/components/FloatingActions";
import {
  buildOrganizationSchema,
  buildWebsiteSchema,
} from "@/lib/seo";
import {
  DEFAULT_KEYWORDS,
  DEFAULT_OG_IMAGE,
  COMPANY_LOGO,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Enreach Global | Global Scrap Metal Buyer",
    template: `%s | ${SITE_NAME}`,
  },
  icons: {
    icon: [
      { url: COMPANY_LOGO, type: "image/png" },
    ],
    shortcut: COMPANY_LOGO,
    apple: { url: COMPANY_LOGO, type: "image/png" },
  },
  description: SITE_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS,
  category: "Industrial metal scrap trading",
  applicationName: SITE_NAME,
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? {
          "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
        }
      : undefined,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Enreach Global | Global Scrap Metal Buyer",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        alt: "Enreach Global premium metal scrap trading",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enreach Global | Global Scrap Metal Buyer",
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({ children }) {
  const globalStructuredData = [
    buildOrganizationSchema(),
    buildWebsiteSchema(),
  ];

  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      {/* ── Google Analytics 4 (G-RZDFKBZYNC) ── */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-RZDFKBZYNC"
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-RZDFKBZYNC', { send_page_view: true });
      `}</Script>

      <body className="min-h-full flex flex-col bg-white text-[#063B24]">
        {globalStructuredData.map((schema, index) => (
          <script
            key={`${schema["@type"]}-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
          />
        ))}
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
