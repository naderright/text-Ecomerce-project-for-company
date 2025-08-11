"use client";
import { motion } from "framer-motion";

export default function SectionOne() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
        >
            <h2 className="text-[2.5rem] font-bold mb-4 leading-[120%] max-w-[26rem]">
                50+ Beautiful rooms
                inspiration
            </h2>
            <p className="text-gray2 max-w-[23rem] font-[500] leading-[150%] mb-6">
               Our designer already made a lot of beautiful prototipe of rooms that inspire you
            </p>
            <button className= "font-bold bg-primary cursor-pointer text-white rounded-sm w-[11rem] h-[3rem]">
                Explore More
            </button>
        </motion.div>
    );
}
