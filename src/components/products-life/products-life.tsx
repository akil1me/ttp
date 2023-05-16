import { useState } from "react";
import { Container } from "../container";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperProductsButtons } from "../swiper-products-buttos";
import "./products-life.scss";

export const ProdusctsLife: React.FC = () => {
  const [index, setIndex] = useState<number>(1);
  return (
    <section className="products-life">
      <Container className="products-life__container">
        <h2 className="products-life__title2">Products life</h2>
        <div className="products-life__inner" data-aos="zoom-in-up">
          <div className="products-life__left-content">
            <h2 className="products-life__title">Products life</h2>
            <div className="products-life__img">
              <p className="products-life__text">
                protect the environment from waste
              </p>
            </div>
          </div>

          <Swiper
            className="products-life__swiper"
            spaceBetween={20}
            slidesPerView={1}
            centerInsufficientSlides={true}
            speed={600}
            onActiveIndexChange={(e) => setIndex(e.realIndex)}
          >
            {[...new Array(8)].map((_, index) => (
              <SwiperSlide
                key={index}
                virtualIndex={index + 1}
                className="products-life__swiper-item"
              >
                <p className="products-life__text">
                  protect the environment from waste
                </p>
              </SwiperSlide>
            ))}

            <SwiperProductsButtons
              index={index}
              section="life"
              className="life-buttons"
            />
          </Swiper>
        </div>
      </Container>
    </section>
  );
};
