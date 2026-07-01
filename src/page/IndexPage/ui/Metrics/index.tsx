"use client";

import { useLanguage } from "@/shared/hooks/useLanguage";

import {
  CHIP_BRANDS,
  REST_BRANDS_COUNT,
  TOTAL_PRODUCTS,
  MIN_NICOTINE,
  MAX_NICOTINE,
  MIN_PRICE,
  BRANDS_AND_SERIES_COUNT,
} from "./constants";

import "./style.scss";

export default function Metrics() {
  const { t } = useLanguage();

  return (
    <section className="section metrics" id="metrics">
      <div className="container">
        <div className="metrics__brands">
          {CHIP_BRANDS.map((brand) => (
            <span
              key={brand}
              className={`metrics__chip${brand === "LYFT" ? " metrics__chip--accent" : ""}`}
            >
              {brand === "LYFT" && <span className="metrics__chip-icon" aria-hidden="true">✳</span>}
              {brand}
            </span>
          ))}
          <span className="metrics__chip metrics__chip--more">+ {REST_BRANDS_COUNT} {t.metrics.brandsMore}</span>
        </div>

        <div className="metrics__divider" />

        <div className="metrics__stats">
          <div className="metrics__stat">
            <span className="metrics__stat-value">{TOTAL_PRODUCTS}+</span>
            <span className="metrics__stat-label">{t.metrics.positions}</span>
          </div>
          <div className="metrics__stat">
            <span className="metrics__stat-value">{BRANDS_AND_SERIES_COUNT}</span>
            <span className="metrics__stat-label">{t.metrics.brandsAndSeries}</span>
          </div>
          <div className="metrics__stat">
            <span className="metrics__stat-value">{MIN_NICOTINE} - {MAX_NICOTINE} mg</span>
            <span className="metrics__stat-label">{t.metrics.nicotine}</span>
          </div>
          <div className="metrics__stat">
            <span className="metrics__stat-value">от {MIN_PRICE} ₽</span>
            <span className="metrics__stat-label">{t.metrics.price}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
