"use client";

import dynamic from "next/dynamic";
import { Product } from "@/types/porduct";
// import { productsData } from "@/constants/products";

const ProductCard = dynamic(() => import("./ProductCard"), { ssr: false });

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
    
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      
    </div>
  );
}
