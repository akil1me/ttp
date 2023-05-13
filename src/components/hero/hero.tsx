import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import pepsi from "../../assets/images/pepsi-logo.png";
import { Container } from "../container";
import { LinkButton } from "../link-button";

import "swiper/css";
import { SwiperButtons } from "../swiper-buttons";
import "./hero.scss";

export const Hero: React.FC = () => {
  const [index, setIndex] = useState<number>(1);

  const slides = Array.from({ length: 8 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  return (
    <section className="hero" id="home">
      <Container>
        <div className="relative">
          <div className="hero__content">
            <h1 className="hero__title">toshkent plast polimir</h1>
            <LinkButton link="products" className="link-hero">
              More Product
            </LinkButton>
            <p className="hero__text">
              Our company has installed more than 20 types of modern
              thermoplastic machines for molding plastic products,{" "}
            </p>
          </div>

          <div className="hero__carusel hero-carulsel flex justify-center items-center ">
            <Swiper
              className="hero-carulsel__swiper static"
              spaceBetween={20}
              slidesPerView={1}
              speed={500}
              onActiveIndexChange={(e) => setIndex(e.realIndex)}
            >
              {slides.map((slideContent, index) => (
                <SwiperSlide
                  className="hero-carulsel__img"
                  key={slideContent}
                  virtualIndex={index + 1}
                >
                  <img src={pepsi} alt="pepsi logo" width={474} height={344} />
                </SwiperSlide>
              ))}

              <SwiperButtons index={index} />
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
};
