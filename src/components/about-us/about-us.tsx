import { Container } from "../container";
import { LinkButton } from "../link-button";
import { aboutUsImages } from "./about-us-images";

import "./about-us.scss";

export const AboutUs: React.FC = () => {
  return (
    <section className="about-us" id="company-us">
      <Container>
        <div>
          <div className="about-us__top">
            <h2 className="about-us__title" data-aos="zoom-in-up">
              About us
            </h2>

            <div className="about-us__info" data-aos="zoom-in-up">
              <p>
                Currently, our company manufactures a wide range of plastic
                boxes for storing and transporting various fruits and
                vegetables, plastic buckets for consumer and industrial needs,
                as well as children's toys. In addition, we produce bumpers for
                GM cars, garbage cans for the TOZA HUDOOD project.
              </p>
              <LinkButton link="link" className="text-black">
                More know
              </LinkButton>
            </div>
          </div>

          <ul className="about-us__list">
            {aboutUsImages.map((item) => (
              <li className="about-us__item" key={item.id} data-aos="zoom-in">
                <div className="about-us__img-content">
                  <img
                    className="about-us__img"
                    src={item.img}
                    alt={item.title}
                    width={263}
                    height={205}
                  />
                </div>
                <div className="mt-10">
                  <h3 className="about-us__item-title">{item.title}</h3>
                  <p className="about-us__item-text">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};
