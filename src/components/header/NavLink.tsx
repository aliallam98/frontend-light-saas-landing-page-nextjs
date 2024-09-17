import Link from "next/link";

interface IProps {
  href: string;
  label: string;
}
const NavLink = ({ href, label }: IProps) => {
  return <Link className="font-medium" href={href}>{label}</Link>;
};

export default NavLink;
