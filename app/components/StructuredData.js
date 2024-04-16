import React from "react";

const StructuredData = () => {
  const jsonLD = `{
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Compress PDF",
      "item": "https://www.seotoolsbydevaxon.com/compress-pdf"
    },{
      "@type": "ListItem",
      "position": 2,
      "name": "Split PDF",
      "item": "https://www.seotoolsbydevaxon.com/split-pdf"
    },{
      "@type": "ListItem",
      "position": 3,
      "name": "PDF To Word",
      "item": "https://www.seotoolsbydevaxon.com/pdf-to-word"
    },{
      "@type": "ListItem",
      "position": 4,
      "name": "Compress Image",
      "item": "https://www.seotoolsbydevaxon.com/compress-image"
    }]
  }`;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLD }}
    />
  );
};

export default StructuredData;
