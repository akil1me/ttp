import "./logo.scss";
import logo from "../../assets/images/logo.png";

export const Logo: React.FC = () => {
  return (
    <a className="logo" href="/">
      <img
        className="logo__img"
        src={logo}
        alt="site logo"
        width={60}
        height={60}
      />
      <span className="logo__text">TOSHKEN PLAST POLIMIR</span>
    </a>
  );
};
