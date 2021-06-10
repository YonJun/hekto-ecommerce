import { useKeenSlider } from "keen-slider/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import tw, { styled, theme } from "twin.macro";
import { Button } from "../../components/Button";
import { Subtitle } from "../../components/HomePage/Typography";

const Dots = styled.div`
  ${tw`space-x-2 flex justify-center relative py-3`}
  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid ${theme`colors[my-pink]`};
    padding: 4px;
    cursor: pointer;
  }

  .dot:focus {
    outline: none;
  }

  .dot.active {
    background: ${theme`colors[my-pink]`};
  }
`;

const SliderWrapper = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [pause, setPause] = useState(false);
  const timer = useRef();

  const [sliderRef, slider] = useKeenSlider({
    slidesPerView: 2,
    spacing: 15,
    loop: true,
    duration: 1000,
    breakpoints: {
      [`(min-width: ${theme`screens.md`})`]: {
        slidesPerView: 3,
        mode: "free-snap",
      },
      [`(min-width: ${theme`screens.lg`})`]: {
        slidesPerView: 4,
        mode: "free-snap",
      },
    },
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
  });

  useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true);
    });
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false);
    });
  }, [sliderRef]);

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 5000);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);

  const countDots = useMemo(() => {
    if (slider) {
      const d = parseInt(
        slider.details().size / slider.details().slidesPerView,
        10,
      );
      // console.log("countDots", d);
      // console.log("slider.details().size", slider.details().size);
      return d;
    }
    return 0;
  }, [slider]);

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        {children}
      </div>
      <div tw="w-full">
        {slider && (
          <Dots>
            {[...Array(countDots).keys()].map((idx) => {
              const newCurrentSlide = Math.round(
                parseFloat((countDots * currentSlide) / slider.details().size),
              );
              return (
                <button
                  key={idx}
                  onClick={() => {
                    slider.moveToSlideRelative(
                      idx * slider.details().slidesPerView,
                    );
                  }}
                  title={idx * slider.details().slidesPerView}
                  className={`dot ${newCurrentSlide === idx && "active"}`}
                />
              );
            })}
          </Dots>
        )}
      </div>
    </>
  );
};
const ImgWrapper = styled.div`
  width: 200px;
  height: 200px;
  ${tw`p-10 rounded-full bg-gray-50`}
  &:hover {
    box-shadow: -5px 5px #9877e7;
  }
`;

const Card = () => {
  const { t } = useTranslation();
  return (
    <div tw="flex flex-col items-center">
      <ImgWrapper className="group" tw="relative">
        <img
          src="https://pngimg.com/uploads/chair/chair_PNG6893.png"
          width="100%"
          height="auto"
          style={{ maxWidth: 80 }}
          tw="block mx-auto"
        />
        <div tw="absolute left-0 bottom-5 w-full flex justify-center invisible group-hover:visible">
          <Button size="xs" color="secondary">
            {t("common.viewShop")}
          </Button>
        </div>
      </ImgWrapper>
      <div tw="py-3 text-center text-navy-blue ">
        <h5 tw="font-bold">Mini LCW Chair</h5>
        <p>$56.00</p>
      </div>
    </div>
  );
};

const TopCategories = () => {
  const { t } = useTranslation();
  return (
    <>
      <Subtitle>{t("pages.home.featureText_5")}</Subtitle>

      <SliderWrapper>
        {[...Array(12).keys()].map((idx) => (
          <div key={idx} className="keen-slider__slide">
            <Card />
          </div>
        ))}
      </SliderWrapper>
    </>
  );
};

export default TopCategories;
