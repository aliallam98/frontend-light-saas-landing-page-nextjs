import Image from "next/image";
import CogImage from "@/assets/cog.png";
import NoodleImage from "@/assets/noodle.png";
import CylinderImage from "@/assets/cylinder.png";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#3b2994,#EAEEFE_100%)]">
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
          <Image src={CogImage} alt="Cog Image" width={500} height={500} />
          <Image
            className="absolute -bottom-7 -right-7 md:-right-26 md:-bottom-20 lg:-right-20 rotate-[30deg] max-md:size-[100px]"
            src={NoodleImage}
            alt="Noodle Image"
            width={160}
            height={160}
          />
          <Image
            className="absolute -top-8 -left-2  md:-left-20 max-md:size-[100px] "
            src={CylinderImage}
            alt="Cylinder Image"
            width={160}
            height={160}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
