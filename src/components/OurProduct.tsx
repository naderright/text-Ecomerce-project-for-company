"use client";

import { motion } from "framer-motion";
import ProductGrid from "@/components/products/ProductGrid";
import { ProductsData } from "@/constants/products";

export default function OurProducts() {
  // const [visibleCount, setVisibleCount] = useState(8);

  return (
    <section className="py-12 container mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-10"
      >
        Our Products
      </motion.h2>

      <ProductGrid products={ProductsData} />

    
        <div className="flex justify-center mt-8">
          <button
            className=" text-primary text-[1rem] font-[600] w-[15rem] h-[3rem] cursor-pointer border border-primary rounded-sm  transition"
          >
            Show More 
          </button>
        </div>
    
    </section>
  );
}
