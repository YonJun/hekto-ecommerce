import tw from "twin.macro";
import { useKeenSlider } from "keen-slider/react";

const FreaturedProducts = () => {
  const [sliderRef] = useKeenSlider({ slidesPerView: 3, spacing: 15 });

  return (
    <div tw="bg-red-400">
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">1</div>
        <div className="keen-slider__slide number-slide2">2</div>
        <div className="keen-slider__slide number-slide3">3</div>
        <div className="keen-slider__slide number-slide4">4</div>
        <div className="keen-slider__slide number-slide5">5</div>
        <div className="keen-slider__slide number-slide6">6</div>
      </div>
    </div>
  );
};

export default FreaturedProducts;
