"use client";

import { motion } from "framer-motion";
import { Heart, Share2, GitCompare } from "lucide-react";
import ProductBadge from "./ProductBadge";
import { Product } from "@/types/porduct";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative group bg-lightBG  mx-auto md:mx-0  rounded-sm overflow-hidden cursor-pointer h-[28rem] max-w-[18rem]"
        >
            <ProductBadge tag={product.tag} discount={product.discount} />

            <Image src={typeof product.image === "string" ? product.image : product.image.src} alt={product.name} className="max-w-[18rem] h-[20rem] object-cover" width={400} height={400} />

            {/* Hover Actions */}
            <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition"
            >
                <button className="bg-white text-primary w-[12rem] h-[3rem] cursor-pointer mb-3 rounded">
                    Add to Cart
                </button>
                <div className="flex gap-4 text-white">
                    <button className="flex items-center gap-1 text-sm">
                        <Share2 size={16} /> Share
                    </button>
                    <button className="flex items-center gap-1 text-sm">
                        <GitCompare size={16} /> Compare
                    </button>
                    <button className="flex items-center gap-1 text-sm">
                        <Heart size={16} /> Like
                    </button>
                </div>
            </motion.div>

            {/* Product Info */}
            <div className="p-4 text-left">
                <h3 className="font-semibold text-gray1 text-[1.5rem] leading-[120%]">{product.name}</h3>
                <p className="text-gray3 mt-4 text leading-[15%] text-[1rem] font-[500]">{product.description}</p>
                <div className="mt-4">
                    <div className="flex items-center gap-8">
                        <span className="text-lg font-[600] leading-[150%] text-gray1">
                            Rp ${product.price}
                        </span>
                        {product.oldPrice ? <span className="text-gray3 font-[400]  text-sm">
                            Rp ${product.oldPrice}
                        </span> : ''}


                    </div>

                </div>
            </div>
        </motion.div>
    );
}
