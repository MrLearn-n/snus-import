import { BRANDS, products } from "@/shared/lib/products";

export const CHIP_BRANDS = [
  "LYFT",
  "VELO",
  "KASTA",
  "FEDRS",
  "Stalker",
  "RED",
  "Corvus",
  "SIBERIA",
];

export const REST_BRANDS_COUNT = BRANDS.length - CHIP_BRANDS.length + 3;
export const TOTAL_PRODUCTS = products.length;
export const MIN_NICOTINE = Math.min(...products.map((p) => p.nicotine));
export const MAX_NICOTINE = Math.max(...products.map((p) => p.nicotine));
export const MIN_PRICE = Math.min(...products.map((p) => p.price));
export const SERIES_COUNT = new Set(
  products.map((p) => p.series).filter(Boolean),
).size;
export const BRANDS_AND_SERIES_COUNT = BRANDS.length + SERIES_COUNT;
