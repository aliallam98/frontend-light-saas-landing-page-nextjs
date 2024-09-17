import Image from "next/image";
import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";

export const LogoTicker = () => {
  return (
    <section className=" p-8 md:p-12 bg-white">
      <div className="container flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <div className="flex items-center gap-16 ">
          <Image src={acmeLogo} alt="acme logo" width={120} height={30} />
          <Image src={quantumLogo} alt="quantum Logo" width={120} height={30} />
          <Image src={celestialLogo} alt="celestial Logo" width={120} height={30} />
          <Image src={pulseLogo} alt="pulse Logo" width={120} height={30} />
          <Image src={apexLogo} alt="apex Logo" width={120} height={30} />
          <Image src={echoLogo} alt="echo Logo" width={120} height={30} />
        </div>
      </div>
    </section>
  );
};
