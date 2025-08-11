"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import hero from "../../public/hero.jpg"; // Adjust the import path as necessary
type HeroProps = {
    title: string;
    description?: string;
    buttonLabel?: string;
    subtitle?: string;

    
};

export default function Hero({
    title,
    description,
    buttonLabel ,

    subtitle ,
}: HeroProps) {
    return (
        <section className="relative h-[80vh] min-h-[520px] w-full overflow-hidden ">
            {/* Background Image with dim overlay */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src={hero}
                    alt='Hero background'
                    className="w-full h-full"
                    fill
                    style={{ objectFit: "cover" , objectPosition: "center"}}
                    priority
                />
                <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-black/30"
                />
            </div>

            {/* Content wrapper centers vertically */}
            <div className="relative z-10 h-full flex items-center">
                {/* Right aligned card on desktop, centered on mobile */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mx-4 w-full max-w-2xl md:ml-auto md:mr-12  bg-[#FFF3E3]  p-6 md:p-8"
                >
                    <div className=" text-left">
                        <span className="text-[#333333]">{subtitle}</span>
                        <h1 className="text-3xl sm:text-4xl md:text-[3.5rem] font-[700] max-w-[30rem]  text-primary leading-16">
                            {title}
                        </h1>

                        {description && (
                            <p className="mt-4 md:text-[1rem] text-base text-[#333333] max-w-[33rem] font-[500] leading-6 ">
                                {description}
                            </p>
                        )}

                        <div className="mt-6 md:mt-8 ">
                            <button

                                className="text-[1rem] font-[700] inline-flex items-center justify-center px-6 py-3  md:px-[4.5rem] md:py-6  bg-primary rounded-sm  text-white  hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-primary)] cursor-pointer transition"
                                aria-label={buttonLabel}
                            >
                                {buttonLabel}
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
