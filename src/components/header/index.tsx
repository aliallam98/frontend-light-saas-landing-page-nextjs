import Navbar from "./Navbar";
import Panner from "./Panner";

const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-50">
      <Panner />
      <Navbar />
    </header>
  );
};

export default Header;
