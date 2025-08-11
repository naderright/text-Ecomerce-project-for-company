"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const images = [
  "https://cdn.salla.sa/XaeeA/vhDuwVOtVz7heMaZC7U3vodepdbpGWb8Ffv43otZ.jpg",
  "https://cdn.salla.sa/XaeeA/9a3eaeb9-8ef3-422c-8cae-6211d6708ef7-1000x666.66666666667-RhBj8aQEa6aQLE6FT4aJm655EguxAJIqYKXx6UVM.jpg",
  "https://emkan-furniture.com/wp-content/uploads/2022/08/%D8%A7%D9%84%D8%A3%D8%AB%D8%A7%D8%AB-%D8%A7%D9%84%D9%85%D9%88%D8%AF%D8%B1%D9%86-1024x673.jpeg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFuIRDqFVR9EFjfVdKlkqQeDBd3mU5pA79xg&s",
];

export default function SectionThree() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative flex flex-col items-center"
    >
      <Image
      width={900}
      height={900}
        src={images[index]}
        alt={`Slide ${index}`}
        className="rounded-lg mb-4 w-[23.3rem] h-[30.5rem] object-cover transition-all"
      />
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white shadow cursor-pointer text-primary p-2 rounded-full"
      >
        <ArrowRight size={18} />
      </button>
      <div className="flex gap-2 mt-2">
        {images.map((_, i) => (
          <div className={`dots w-4 h-4 rounded-full flex items-center justify-center   ${i === index ? 'border border-primary':''}`} key={i}>
            <span
              className={`inline-block w-2 h-2 rounded-full ${
                i === index ? "bg-primary" : "bg-gray-400"
              }`}
            ></span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
