import Image from "next/image";
import LogoImage from "@/assets/logosaas.png";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image alt="Logo" src={LogoImage} width={40} height={40} />
    </Link>
  );
};

export default Logo;
