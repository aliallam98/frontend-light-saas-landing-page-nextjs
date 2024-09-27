import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import star from "@/assets/star.png";
import spring from "@/assets/spring.png";

export const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] overflow-x-clip">
      <div className="container mt-4">
        <div className="relative flex flex-col items-center gap-4 text-center">
          <h2 className="text-2xl md:text-5xl">Sign up for free today</h2>
          <p className="max-w-sm">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <Image
            src={star}
            alt="star"
            width={160}
            height={160}
            className="absolute -top-[120px] -left-[120px] md:-left-[90px]"
          />
          <Image
            src={spring}
            alt="star"
            width={160}
            height={160}
            className="absolute -bottom-[120px] -right-[120px]  md:-right-[90px]"
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
