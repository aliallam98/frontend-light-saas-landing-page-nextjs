import { MenuIcon } from "lucide-react";
import Logo from "../Logo";

const Navbar = () => {
  return (
    <div className="container p-4 flex items-center justify-between">
      <Logo />
      <MenuIcon className="md:hidden"/>
    </div>
  );
};

export default Navbar;
