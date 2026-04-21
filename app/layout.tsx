import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { businessInfo } from "@/data/businessInfo";
import t from "@/lib/translations";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://barcafeteriasiboney.com"),
  title: t.meta.title,
  description: t.meta.description,
  keywords: [
    "bar cafeteria Barcelona",
    "tapas Sarrià-Sant Gervasi",
    "bar bocadillos Barcelona",
    "cafetería tapas Barcelona",
    "comida casera Sarrià",
    "Bar Cafeteria Siboney",
    "cerveza Damm Barcelona",
  ],
  openGraph: {
    type: "website",
    locale: "es_ES",
    title: t.meta.ogTitle,
    description: t.meta.description,
    siteName: businessInfo.name,
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD structured data for local SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["FoodEstablishment", "BarOrPub", "CafeOrCoffeeShop"],
  name: businessInfo.name,
  description:
    "Bar y cafetería de barrio en Sarrià-Sant Gervasi, Barcelona. Tapas, bocadillos, platos combinados, café y cervezas Damm.",
  address: {
    "@type": "PostalAddress",
    streetAddress: businessInfo.address.street,
    addressLocality: businessInfo.address.city,
    addressRegion: "Catalunya",
    postalCode: businessInfo.address.postalCode,
    addressCountry: "ES",
  },
  telephone: businessInfo.phone.display,
  geo: {
    "@type": "GeoCoordinates",
    latitude: businessInfo.geo.latitude,
    longitude: businessInfo.geo.longitude,
  },
  servesCuisine: ["Española", "Tapas", "Mediterránea"],
  menu: businessInfo.links.digitalMenu,
  priceRange: "€",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "15:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={t.lang} className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
