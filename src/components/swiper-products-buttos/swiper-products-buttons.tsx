import { useSwiper } from "swiper/react";
import "./swiper-products-buttons.scss";
import { useDynamicWidth } from "../../hooks";

type SwiperButtonsProps = {
  index: number;
  section?: string;
  className?: string;
};
export const SwiperProductsButtons: React.FC<SwiperButtonsProps> = ({
  index,
  section,
  className,
}) => {
  const swiper = useSwiper();
  const { screenSize } = useDynamicWidth();

  const handleNext = () => {
    if (swiper.activeIndex === (!section ? (screenSize < 938 ? 7 : 5) : 7)) {
      swiper.slideTo(0);
    } else {
      swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiper.activeIndex === 0) {
      swiper.slideTo(0);
    } else {
      swiper.slidePrev();
    }
  };

  return (
    <div className={`swiper-products-buttons ${className}`}>
      <button className="swiper-products-buttons__button" onClick={handlePrev}>
        ‹
      </button>
      <p>
        {index} - {!section ? (screenSize < 938 ? 8 : 6) : 8}
      </p>
      <button className="swiper-products-buttons__button" onClick={handleNext}>
        ›
      </button>
    </div>
  );
};
