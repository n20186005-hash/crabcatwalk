"use client";

import React from "react";
import { useLang } from "@/components/LangProvider";

export function StructuredData() {
  const { t, locale } = useLang();

  const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "crab-catwalk.com"}`;

  const touristAttractionSchema = {
    "@context": "https://schema.org",
    "@type": ["TouristAttraction", "Place", "LandmarksOrHistoricalBuildings"],
    "name": locale === "pt" ? "Passarela do Caranguejo" : locale === "zh" ? "蟹步道" : "Crab Catwalk",
    "description": t.history.intro,
    "url": `${baseUrl}/${locale}`,
    "image": `${baseUrl}/gallery/crab-catwalk (11).jpg`,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "23374"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -10.9143,
      "longitude": -37.0698
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Santos Dumont, 5600 - Atalaia",
      "addressLocality": "Aracaju",
      "addressRegion": "Sergipe",
      "addressCountry": "BR"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": t.faq.items.map((item: any) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
