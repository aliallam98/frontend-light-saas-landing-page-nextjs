"use client";
import Image from "next/image";
import productImage from "@/assets/product-image.png";

import pyramidsImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="py-10 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] overflow-x-clip"
    >
      <div className="container flex flex-col items-center text-center gap-4">
        <p className="border rounded-md w-fit p-1 border-black/20 border-b-4">
          Boost your productivity
        </p>
        <h2 className="bg-gradient-to-b from-black to-blue-400 bg-clip-text text-transparent text-3xl md:text-4xl  lg:text-6xl font-semibold">
          A more effective way to track progress
        </h2>
        <p className="max-w-sm text-center">
          Effortlessly turn your ideas into a fully functional, responsive, SaaS
          website in just minutes with this template.
        </p>
      </div>
      <div className=" relative flex justify-center mt-10">
        <Image
          src={productImage}
          alt="product image"
          width={1200}
          height={1200}
        />
        <motion.img
          src={pyramidsImage.src}
          alt="pyramids Image "
          className="absolute  top-0 -right-36 lg:right-0 rotate-45 max-md:hidden"
          width={260}
          height={260}
          style={{
            translateY,
          }}
        />
        <motion.img
          src={tubeImage.src}
          alt="tube Image"
          className="absolute bottom-16  lg:bottom-32 -left-40 lg:left-0 max-md:hidden"
          width={260}
          height={260}
          style={{
            translateY,
          }}
        />
      </div>
    </section>
  );
};
