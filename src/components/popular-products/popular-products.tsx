import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "../container";

import "./poplar-products.scss";
import "swiper/css";
import { products } from "./products";
import { SwiperProductsButtons } from "../swiper-products-buttos";
import { useDynamicWidth } from "../../hooks";

export const PopularProducts: React.FC = () => {
  const { screenSize } = useDynamicWidth();

  const [index, setIndex] = useState<number>(1);
  return (
    <section className="popular-products" id="products">
      <Container>
        <h2 className="popular-products__title">our most popular products</h2>
      </Container>

      <div data-aos="zoom-in-up">
        <Swiper
          className="popular-products__swiper"
          spaceBetween={20}
          slidesPerView={"auto"}
          centeredSlides={screenSize < 938 ? true : false}
          centerInsufficientSlides={true}
          speed={500}
          onActiveIndexChange={(e) => setIndex(e.realIndex)}
        >
          {[...products, ...products, ...products.slice(0, 2)].map(
            (product, index) => (
              <SwiperSlide
                key={index}
                virtualIndex={index + 1}
                className="popular-products__swiper-item swiper-item"
              >
                <h3 className="swiper-item__title">{product.title}</h3>
                <img
                  className={`swiper-item__img swiper-item__img${product.id}`}
                  src={product.img}
                  alt={product.title}
                  width={product.width}
                  height={product.height}
                />

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="swiper-item__size-title category__size-title">
                      size
                    </h4>
                    <div className="swiper-item__size category__size category__size-active ">
                      {product.size}
                    </div>
                  </div>

                  <div>
                    <h4 className="swiper-item__size-title category__size-title">
                      size
                    </h4>
                    <div className="swiper-item__price category__price">
                      <p> {product.price.toLocaleString("fi-FI")} </p>
                      <span>so'm</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          )}

          <SwiperProductsButtons index={index} cented />
        </Swiper>
      </div>
    </section>
  );
};
