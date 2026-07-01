"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

import { BRANDS, products } from "@/shared/lib/products";
import { buildImagePath } from "@/shared/lib/buildImagePath";
import { useLanguage } from "@/shared/hooks/useLanguage";

import "./style.scss";

export default function Catalog() {
  const [activeBrand, setActiveBrand] = useState<string>("Blue Magic");
  const { t } = useLanguage();

  const filtered = useMemo(
    () => products.filter((product) => product.brand === activeBrand),
    [activeBrand],
  );

  return (
    <section className="section catalog" id="catalog">
      <div className="container">
        <h2 className="title catalog__title">{t.catalog.title}</h2>

        <div className="catalog__filters">
          {BRANDS.map((brand) => (
            <button
              key={brand}
              type="button"
              className={`catalog__filter-btn${activeBrand === brand ? " catalog__filter-btn--active" : ""}`}
              onClick={() => setActiveBrand(brand)}
            >
              {brand}
            </button>
          ))}
        </div>

        <p className="catalog__count">{t.catalog.count(filtered.length)}</p>

        <div className="catalog__grid">
          {filtered.map((product) => (
            <article key={product.id} className="catalog__card">
              <div className="catalog__card-image">
                <Image
                  src={buildImagePath(product.folder, product.file)}
                  alt={product.name}
                  fill
                  sizes="(max-width: 567px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  style={{ objectFit: "contain" }}
                />
              </div>

              <div className="catalog__card-info">
                <span className="catalog__card-brand">
                  {product.brand}
                  {product.series ? ` · ${product.series}` : ""}
                </span>
                <h3 className="catalog__card-name">{product.name}</h3>

                <div className="catalog__card-meta">
                  <span className="catalog__card-nicotine">
                    {product.nicotine} мг
                  </span>
                  <span className="catalog__card-price">{product.price} ₽</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
