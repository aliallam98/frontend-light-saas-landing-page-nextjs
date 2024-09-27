"use client";
import Image from "next/image";
import CogImage from "@/assets/cog.png";
import NoodleImage from "@/assets/noodle.png";
import CylinderImage from "@/assets/cylinder.png";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import * as motion from "framer-motion/client";
import { useRef } from "react";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  // useMotionValueEvent(translateY,"change",(x) => console.log(x))

  return (
    <section
      ref={heroRef}
      className="py-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#3b2994,#EAEEFE_100%)]"
    >
      <div className="container flex flex-col md:flex-row items-center overflow-x-clip">
        <div className="flex flex-col  md:w-[45%] gap-10">
          <p className="border rounded-md w-fit p-1 border-black/20 border-b-4">
            Version 2.0 Is Here
          </p>
          <h1 className="bg-gradient-to-b from-black to-blue-400 bg-clip-text text-transparent text-5xl  lg:text-7xl font-semibold">
            Pathway to productivity
          </h1>
          <p>
            Celebrate the joy of accomplishment with app designed to track your
            progress motivate efforts. ard celebrate successes
          </p>
          <div className="space-x-4">
            <Button>Get For Free</Button>
            <Button variant={"ghost"} className="hover:bg-transparent">
              Learn More <ArrowRight className="size-4 ml-2" />
            </Button>
          </div>
        </div>
        <div className="relative flex md:flex-1 items-center justify-center max-md:mt-20">
          <motion.img
            src={CogImage.src}
            alt="Cog Image"
            width={500}
            height={500}
            animate={{
              translateY: [-30, 30],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 3,
              ease: "easeInOut",
            }}
          />
          <motion.img
            className="max-md:hidden absolute -bottom-7 -right-7 md:-right-26 md:-bottom-20 lg:-right-20 rotate-[30deg] max-md:size-[100px]"
            src={NoodleImage.src}
            alt="Noodle Image"
            width={160}
            height={160}
            style={{
              translateY:translateY as unknown as string, 
              rotate:30
            }}
          />
          <motion.img
            className="max-md:hidden absolute -top-8 -left-2  md:-left-20 max-md:size-[100px] "
            src={CylinderImage.src}
            alt="Cylinder Image"
            width={160}
            height={160}
            style={{
              translateY:translateY as unknown as number,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
