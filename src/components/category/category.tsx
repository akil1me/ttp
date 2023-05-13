import { Container } from "../container";

import "./category.scss";
import { categorys } from "./categorys";

export const Category: React.FC = () => {
  return (
    <section className="category">
      <Container>
        <div>
          <h2 className="category__title">Products categoria</h2>

          <ul className="category__list">
            {categorys.map((item) => (
              <li className="category__item" key={item.id}>
                <h3 className="category__name">{item.title}</h3>

                <ul className="category__categorys">
                  {item.categorys.map((category) => (
                    <li className="category__category" key={category}>
                      {category}
                    </li>
                  ))}
                </ul>

                <div className="category__content">
                  <div>
                    <h4 className="category__size-title">size</h4>
                    <ul className="category__size-list">
                      {item.sizes.map((size) => (
                        <li className="category__size" key={size}>
                          {size}
                        </li>
                      ))}
                    </ul>

                    <ul className="category__colors">
                      {item.colors.map((color) => (
                        <li
                          className="category__color"
                          key={color}
                          style={{ backgroundColor: `${color}` }}
                        ></li>
                      ))}
                    </ul>

                    <h5 className="category__size-title">price</h5>
                    <p className="category__price">
                      {item.price.toLocaleString("fi-FI")} so'm
                    </p>
                  </div>

                  <img
                    className={`category__img${item.id}`}
                    src={item.img}
                    alt={item.title}
                    width={384}
                    height={265}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};
