import "./Header.css";
import Heading from "../Heading/Heading";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header className="d-flex align-items-center justify-content-center header__container">
      <Logo />
      <Heading />
    </header>
  );
};
export default Header;
