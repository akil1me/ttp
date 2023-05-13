import vector from "../../assets/images/vector.png";
import { useSwiper } from "swiper/react";

type SwiperButtonsProps = {
  index: number;
};

export const SwiperButtons: React.FC<SwiperButtonsProps> = ({ index }) => {
  const swiper = useSwiper();

  const handleNext = () => {
    if (swiper.activeIndex === 7) {
      swiper.slideTo(0);
    } else {
      swiper.slideNext();
    }
  };

  return (
    <div className="hero-carulsel__buttons absolute z-10 bottom-11 right-0 left-0 m-auto flex items-center justify-center">
      <button
        className="hover:opacity-70 transition-opacity"
        onClick={() => swiper.slidePrev()}
      >
        <img
          className="hero-carulsel__buttons-img"
          src={vector}
          alt="vector"
          width={32}
          height={32}
        />
      </button>

      <div className="hero-carulsel__number">
        <span>{index}</span> - 8
      </div>

      <button
        className="hover:opacity-70 transition-opacity"
        onClick={handleNext}
      >
        <img
          className="rotate-180 hero-carulsel__buttons-img"
          src={vector}
          alt="vector"
          width={32}
          height={32}
        />
      </button>
    </div>
  );
};
