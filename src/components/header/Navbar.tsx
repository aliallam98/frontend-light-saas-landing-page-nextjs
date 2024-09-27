import { MenuIcon } from "lucide-react";
import Logo from "../Logo";
import NavLink from "./NavLink";
import { Button } from "../ui/button";

const links = [
  {
    label: "About",
    href: "/",
  },
  {
    label: "Features",
    href: "/",
  },
  {
    label: "Customers",
    href: "/",
  },
  {
    label: "Updates",
    href: "/",
  },
  {
    label: "Help",
    href: "/",
  },
];

const Navbar = () => {
  return (
    <div className="container p-4 flex items-center justify-between">
      <Logo />
      <MenuIcon className="md:hidden" />
      <nav className="flex items-center gap-4 max-md:hidden">
        {links.map((link, i) => (
          <NavLink key={i} href={link.href} label={link.label} />
        ))}

        <Button>Get For Free</Button>
      </nav>
    </div>
  );
};

export default Navbar;
