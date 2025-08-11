import type { StaticImageData } from "next/image";

export interface Product {
  id: number;
  name: string;
  description?: string;
  image: StaticImageData;
  price: number;
  oldPrice?: number;
  tag?: "sale" | "new";
  discount?: number;
}