import { Container } from "../container";
import logo from "../../assets/images/footer-logo.png";

import "./footer.scss";
import { navList } from "../nav";
import { Link } from "react-scroll";
import { Contact } from "../contact";
import { Icons } from "../icons/icons";
import { footerIcons } from "./footer-icons";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__inner">
          <div className="footer__logo" data-aos="zoom-in-up">
            <img
              className="footer__logo-img"
              src={logo}
              alt="site logo"
              width={141}
              height={155}
            />
            <p>TOSHKEN PLAST POLIMIR</p>
          </div>

          <div className="footer__right" data-aos="zoom-in-up">
            <div className="footer__nav-content">
              <nav className={`footer__nav nav`}>
                <ul className={`footer__nav-list nav__list`}>
                  {navList.map(({ id, title, link }) => (
                    <li className={`footer__nav-item nav__item`} key={id}>
                      <Link
                        className={`footer__nav-link nav__link`}
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

            <div className="footer__contact-content">
              <Contact className="footer__contact" />
            </div>

            <div className="footer__icons-content">
              <Icons icons={footerIcons} />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
