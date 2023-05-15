import { Container } from "../container";

import "./partners.scss";

export const Partners: React.FC = () => {
  return (
    <section className="partners" id="servic">
      <Container>
        <ul className="partners__list">
          {[...new Array(10)].map((_, index) => (
            <li
              data-aos="zoom-out-up"
              key={index}
              className={`partners__item partners__item${index + 1}`}
            ></li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
