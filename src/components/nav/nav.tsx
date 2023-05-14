import { Link } from "react-scroll";
import menuClose from "../../assets/images/menu-close.svg";
import menu from "../../assets/images/menu.svg";
import { useOutside } from "../../hooks";
import { navList } from "./nav-list";
import "./nav.scss";

export const Nav: React.FC = () => {
  const { navRef, isOpen, setIsOpen } = useOutside(false);

  return (
    <div className="relative">
      <button className="menu" onClick={() => setIsOpen(true)}>
        <img src={menu} alt="menu" width={24} height={24} />
      </button>

      <nav className={`nav`}>
        <ul className={`nav__list `}>
          {navList.map(({ id, title, link }) => (
            <li className={`nav__item `} key={id}>
              <Link
                className={`nav__link `}
                to={link}
                spy={true}
                smooth={true}
                offset={-50}
                duration={600}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav
        ref={navRef}
        className={`nav-mobile ${isOpen ? "nav-mibile-active" : null}`}
      >
        <button className="menu menu-close" onClick={() => setIsOpen(false)}>
          <img src={menuClose} alt="menu-close" width={24} height={24} />
        </button>

        <ul className={"nav-mobile__list"}>
          {navList.map(({ id, title, link }) => (
            <li className={`nav-mobile__item`} key={id}>
              <Link
                className={`nav__link nav-mobile__link`}
                to={link}
                spy={true}
                smooth={true}
                offset={-50}
                duration={600}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
