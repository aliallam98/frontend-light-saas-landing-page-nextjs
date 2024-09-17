import Image from "next/image";
import LogoImage from "@/assets/logosaas.png";

const Logo = () => {
  return <Image alt="Logo" src={LogoImage} width={40} height={40} />;
};

export default Logo;
