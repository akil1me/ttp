import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "../container";
import { LinkButton } from "../link-button";

import "swiper/css";
import { SwiperButtons } from "../swiper-buttons";
import { images } from "./hero-images";
import "./hero.scss";

export const Hero: React.FC = () => {
  const [index, setIndex] = useState<number>(1);

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
              {[...images, ...images].map((image, index) => (
                <SwiperSlide
                  className="hero-carulsel__img"
                  key={index}
                  virtualIndex={index + 1}
                >
                  <img src={image} alt="pepsi logo" width={474} height={344} />
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
