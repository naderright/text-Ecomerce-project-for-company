"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import dining from "../../public/category1.png";
import living from "../../public/category2.png";  
import bedroom from "../../public/category3.png";
import type { StaticImageData } from "next/image";

type Category = {
  name: string;
  img: StaticImageData;
}[];
const categories: Category = [
  {
    name: "Dining",
    img: dining,
  },
  {
    name: "Living",
    img: living,
  },
  {
    name: "Bedroom",
    img: bedroom,
  },
];

export default function Category() {
  return (
    <section className="px-2 container mx-auto py-16 ">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl md:text-[2rem] tracking-normal font-bold text-center mb-4 leading-[100%]"
      >
        Browse The Range
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center font-[400] tracking-normal md:text-[1.3rem] text-[#666666] max-w-2xl mx-auto mb-10 leading-[100%]"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </motion.p>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 cursor-pointer gap-1 items-center justify-items-center">
        {categories.map((cat, index) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Image
              src={cat.img}
              alt={cat.name}
              width={500}
              height={500}
          
              className="w-[24rem] h-[30rem]  object-cover  rounded-sm shadow-md"
            />
            <h3 className="mt-4 text-lg font-semibold ">{cat.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
