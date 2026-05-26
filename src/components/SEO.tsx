import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  name?: string;
  type?: string;
  image?: string;
  noindex?: boolean;
}

export default function SEO({ 
  title, 
  description, 
  name = "Manomay Global Solutions", 
  type = "website",
  image = "https://manomayglobalsolutions.com/hero-implementation.jpeg",
  noindex = false
}: SEOProps) {
  const location = useLocation();
  const currentUrl = `https://manomayglobalsolutions.com${location.pathname}${location.search}`;

  // Organization Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Manomay Global Solutions",
    "url": "https://manomayglobalsolutions.com",
    "logo": "https://manomayglobalsolutions.com/Manomay_Logo_Favicon.png",
    "description": "Global ERP Implementation & Consulting Partner specializing in NetSuite and Odoo.",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "email": "Sales@manomayglobalsolutions.com"
    }
  };

  return (
    <Helmet>
      { /* Standard metadata tags */ }
      <title>{title}</title>
      <meta name='description' content={description} />
      <link rel="canonical" href={currentUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      { /* End standard metadata tags */ }
      { /* Facebook tags */ }
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content={name} />
      { /* End Facebook tags */ }
      { /* Twitter tags */ }
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      { /* End Twitter tags */ }
      
      { /* Structured Data JSON-LD */ }
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
}
