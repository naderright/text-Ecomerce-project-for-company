"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function SectionTwo() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
        >
            <Image
                src="https://v-genius.fatafeat.com/storage/attachments/20/bigstock-Modern-living-room-with-sofa-a-169371245_848142.jpg/r/800/bigstock-Modern-living-room-with-sofa-a-169371245_848142.jpg"
                alt="Demo"
                width={1100}
                height={1100}

                className="w-[25.3rem]  h-[36.5rem] object-cover rounded-sm"
            />
            <div className="absolute bottom-8 left-4 bg-white p-3 mx-auto rounded shadow-lg w-[13.5rem] h-[8rem]">
                <div className="contect flex flex-col justify-center  h-full">
                    <span className=" gap-2 text-sm  font-[500] text-gray3 flex items-center">01 <span className="inline-block w-5 h-0.5 bg-gray3"></span> Bed Room</span>
                    <p className="text-[1.7rem] font-[600] text-gray1 mt-1">
                        Inner Peace
                    </p>
                </div>
                <button className="absolute bottom-0 right-[-12%] cursor-pointer bg-primary text-white p-1 rounded-sm hover:bg-gray3 transition">
                    <ArrowRight size={18} />
                </button>
            </div>

        </motion.div>
    );
}
