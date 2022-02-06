export const homepage_schema = {
    "@context": "http://schema.org",
    "@type": "LegalService",
    "name": "Cabinet Avocat Doru Botea ⚖️",
    "founder": {
        "@type": "Person",
        "name": "Doru Botea",
        "sameAs": [
            "https://www.linkedin.com/in/doru-botea-08077892/?originalSubdomain=ro",
            "https://www.facebook.com/avocatdorubotea",

        ]
    },
    "hasMap": {
        "@type": "Map",
        "name": "Map",
        "@id": "https://g.page/avocat-doru-botea-drept-penal?share"
    },
   
    "image": {
        "@type": "ImageObject",
        "name": "logo.webp",
        "url": "./assets/images/logo.webp",
        "@id": "http://schemaapp.com/db/#ImageObject"
    },
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Iuliu Maniu, 47",
        "postalCode": "500091",
        "addressRegion": "Brasov",
        "addressLocality": "Brasov",
        "addressCountry": "Romania",
        "name": "Address",
        "@id": "https://avocatdorubotea.ro/#PostalAddress"
    }}