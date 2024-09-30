"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import star from "@/assets/star.png";
import spring from "@/assets/spring.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";



export const CallToAction = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] overflow-x-clip">
      <div className="container mt-4">
        <div className="relative flex flex-col items-center gap-4 text-center">
          <h2 className="text-2xl md:text-5xl">Sign up for free today</h2>
          <p className="max-w-sm">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <motion.img
            src={star.src}
            alt="star"
            width={160}
            height={160}
            className="absolute -top-[120px] -left-[120px] md:-left-[90px]"
            style={{
              translateY
            }}
          />
          <motion.img
            src={spring.src}
            alt="star"
            width={160}
            height={160}
            className="absolute -bottom-[120px] -right-[120px]  md:-right-[90px]"
            style={{
              translateY
            }}
          />
        </div>
        <div className="text-center mt-6 space-x-2">
          <Button>Get For Free</Button>
          <Button variant={"ghost"} className="hover:bg-transparent ">
            Learn more <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
