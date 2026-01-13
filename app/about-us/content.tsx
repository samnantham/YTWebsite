"use client";

import { motion  } from "framer-motion";
import Image from "next/image";

import {
  bannerVariant,
  slideLeft,
  slideRight,
} from "@/lib/animations";

const sections = [
  {
    title: "Who We Are",
    description:
      "Turbine Axis specialize in Asset Management, Inventory Stock Distribution, Repair Management of Engines & Airframe Component including complete Engine and Supply Chain Management. But not limited to, Ground Support Equipment, Sales and Lease Management of Engines & Aircraft and its Technical Services.",
    image: "/assets/grid/1.jpg",
  },
  {
    title: "Our Mission",
    description:
      "Turbine Axis provides comprehensive and tailored solution to customers globally in supply chain logistics. We partner with Airlines, Operators, MROs and owners worldwide to deliver high standards of quality with economic cost.",
    image: "/assets/grid/2.jpg",
  },
  {
    title: "Our Vision",
    description:
      "Turbine Axis is committed to meeting regulatory requirements and exceeding customer expectations while maintaining the highest aviation safety standards.",
    image: "/assets/grid/3.jpg",
  },
];

/* =======================
   PAGE
======================= */

export default function AboutUsContent() {
  return (
    <div className="bg-white dark:bg-black overflow-x-hidden">

      {/* =======================
         TOP BANNER
      ======================= */}
      <div
        className="
          relative
          h-[300px] sm:h-[380px] md:h-[450px]
          w-screen
          left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
          overflow-hidden
        "
      >
        {/* BACKGROUND IMAGE */}
        <Image
          src="/assets/slider/slide1.jpeg"
          alt="About Us Banner"
          fill
          priority
          className="object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/20" />

        {/* ✅ ANIMATED GRADIENT CONTENT */}
        <motion.div
          variants={bannerVariant}
          initial="hidden"
          animate="visible"
          className="
            absolute inset-0 z-10
            flex items-center justify-center
            bg-gradient-to-b from-[#484848]/80 to-[#2c2c2c]/80
            backdrop-blur-[2px]
          "
        >
          <div className="mx-auto max-w-5xl px-4 text-center flex flex-col items-center justify-center">
            <h1 className="mb-3 text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-white tracking-widest drop-shadow-md">
              Welcome to Turbine Axis
            </h1>

            <p className="max-w-3xl text-base sm:text-lg md:text-xl text-white/85 leading-relaxed drop-shadow">
              Turbine Axis is one of the leading Aviation Services Company in the
              Middle East Region, established at Sharjah Airport International
              Free (SAIF) Zone, Sharjah with vast industry expertise.
            </p>
          </div>
        </motion.div>
      </div>

      {/* =======================
         CONTENT SECTIONS
      ======================= */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 space-y-24">

          {sections.map((item, index) => {
            const isEven = index % 2 !== 0;

            return (
              <motion.div
                key={index}
                variants={isEven ? slideRight : slideLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              >
                {/* IMAGE */}
                <div className={isEven ? "md:order-2" : ""}>
                  <div className="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden rounded-2xl shadow-lg">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* TEXT */}
                <div className={isEven ? "md:order-1" : ""}>
                  <h2 className="mb-4 text-2xl md:text-3xl font-semibold text-[#f06500] uppercase tracking-wide">
                    {item.title}
                  </h2>
                  <p className="text-base md:text-lg text-[#484848] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}

        </div>
      </section>

    </div>
  );
}
