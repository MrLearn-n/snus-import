import type { WithContext, Service } from "schema-dts";
import type { Metadata } from "next";

import IndexPage from "@/page/IndexPage";

export const metadata: Metadata = (() => {
  const title = "SNUS IMPORT — каталог никотиновых паучей";
  const description =
    "Лучшие бренды никотиновых паучей в одном каталоге: разные крепости, десятки вкусов, фото, никотин и цена для каждой позиции.";
  const alt = "SNUS IMPORT";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${process.env.NEXT_PUBLIC_URL}/`,
      type: "website",
      images: {
        url: `${process.env.NEXT_PUBLIC_URL}/common/sharing.jpg`,
        secureUrl: `${process.env.NEXT_PUBLIC_URL}/common/sharing.jpg`,
        width: 1200,
        height: 630,
        alt,
      },
    },
  };
})();

const jsonLd: WithContext<Service> = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SNUS IMPORT",
  description:
    "Каталог никотиновых паучей: бренды, линейки, крепости и вкусы в одном месте.",
  url: `${process.env.NEXT_PUBLIC_URL}/`,
};

export default function Page() {
  return (
    <section className="page">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: required for schema-dts
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <IndexPage />
    </section>
  );
}
