import { organizationSchema, websiteSchema } from '@/config/seo';

interface StructuredDataProps {
  data: object | object[];
}

export const StructuredData = ({ data }: StructuredDataProps) => {
  const jsonLd = Array.isArray(data) ? data : [data];

  return (
    <>
      {jsonLd.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
};

/**
 * Default structured data for the site (Organization and WebSite)
 */
export const DefaultStructuredData = () => {
  return <StructuredData data={[organizationSchema, websiteSchema]} />;
};

