export type Product = {
  id: string;
  brand: string;
  series: string | null;
  name: string;
  nicotine: number;
  price: number;
  folder: string;
  file: string;
};

export type Lang = "RU" | "BY";
