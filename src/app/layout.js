// app/layout.js
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  metadataBase: new URL("https://www.faleyesurveys.com"), // Replace with your actual domain
  title: {
    default: "Faleye Surveys | Premier Survey Solutions in Lagos, Nigeria",
    template: "%s | Faleye Surveys",
  },
  description:
    "Faleye Surveys is a pioneering general survey firm in Lagos, Nigeria, delivering top-notch topographical surveys, engineering surveys, cadastral surveys, and geospatial solutions with cutting-edge technology and expert precision.",
  keywords: [
    "survey company Lagos",
    "topographical surveys Nigeria",
    "land surveying Lagos",
    "engineering surveys",
    "cadastral surveys",
    "geospatial solutions Nigeria",
    "licensed surveyors Lagos",
    "building survey services",
    "property surveys Nigeria",
    "drone surveying Lagos",
    "GPS surveying",
    "hydrographic surveys",
    "construction surveys Nigeria",
  ],
  authors: [{ name: "Faleye Surveys" }],
  creator: "Faleye Surveys",
  publisher: "Faleye Surveys",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://www.faleyesurveys.com",
    title: "Faleye Surveys | Premier Survey Solutions in Lagos, Nigeria",
    description:
      "Leading general survey firm in Lagos delivering cutting-edge topographical, engineering, cadastral, and geospatial solutions with proven excellence.",
    siteName: "Faleye Surveys",
    images: [
      {
        url: "/images/og-image.jpg", // Create this image (1200x630px recommended)
        width: 1200,
        height: 630,
        alt: "Faleye Surveys - Premier Survey Solutions in Lagos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faleye Surveys | Premier Survey Solutions in Lagos, Nigeria",
    description:
      "Leading general survey firm in Lagos delivering cutting-edge topographical, engineering, cadastral, and geospatial solutions.",
    images: ["/images/og-image.jpg"],
    creator: "@faleyesurveys", // Replace with actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  alternates: {
    canonical: "https://www.faleyesurveys.com",
  },
  category: "Business Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Additional SEO meta tags */}
        <meta name="geo.region" content="NG-LA" />
        <meta name="geo.placename" content="Lagos" />
        <meta name="geo.position" content="6.5244;3.3792" />
        <meta name="ICBM" content="6.5244, 3.3792" />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Faleye Surveys",
              image:
                "https://www.faleyesurveys.com/images/FaleyeWebsiteLogo.svg",
              "@id": "https://www.faleyesurveys.com",
              url: "https://www.faleyesurveys.com",
              telephone: "+234-XXX-XXX-XXXX", // Add your phone number
              address: {
                "@type": "PostalAddress",
                streetAddress: "Your Street Address", // Add actual address
                addressLocality: "Lagos",
                addressRegion: "Lagos",
                postalCode: "XXXXXX", // Add postal code
                addressCountry: "NG",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 6.5244,
                longitude: 3.3792,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "08:00",
                closes: "17:00",
              },
              sameAs: [
                "https://www.facebook.com/faleyesurveys", // Add your social media
                "https://www.linkedin.com/company/faleyesurveys",
                "https://twitter.com/faleyesurveys",
                "https://www.instagram.com/faleyesurveys",
              ],
              priceRange: "$$",
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 6.5244,
                  longitude: 3.3792,
                },
                geoRadius: "50000",
              },
              description:
                "Pioneering general survey firm in Lagos, Nigeria, delivering top-notch topographical, engineering, cadastral, and geospatial solutions.",
            }),
          }}
        />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased text-[var(--color-secondary-100)]`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
