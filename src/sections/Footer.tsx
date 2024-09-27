import Logo from "@/components/Logo";
import Link from "next/link";

import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import Sociallinkedin from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import Socialyoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="py-10 bg-black text-white">
      <div className="container flex flex-col  items-center gap-4">
        <div className="inline-flex relative before:content-[''] before:size-10 before:top-2 before:bottom-0 before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)]">
          <span className="absolute">
            <Logo />
          </span>
        </div>
        <nav className="flex flex-col md:flex-row items-center gap-4">
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Features</Link>
          <Link href={"#"}>Customers</Link>
          <Link href={"#"}>Pricing</Link>
          <Link href={"#"}>Help</Link>
          <Link href={"#"}>Careers</Link>
        </nav>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <SocialX />
          <SocialInsta />
          <Sociallinkedin />
          <SocialPin />
          <Socialyoutube />
        </div>
        <p className="mt-6">&Copy Your company, Inc. all right reserved. </p>
      </div>
    </footer>
  );
};
