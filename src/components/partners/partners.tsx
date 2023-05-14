import { Container } from "../container";

import "./partners.scss";

export const Partners: React.FC = () => {
  return (
    <section className="partners">
      <Container>
        <ul className="partners__list">
          {[...new Array(10)].map((_, index) => (
            <li
              key={index}
              className={`partners__item partners__item${index + 1}`}
            ></li>
          ))}
        </ul>
      </Container>
    </section>
  );
};