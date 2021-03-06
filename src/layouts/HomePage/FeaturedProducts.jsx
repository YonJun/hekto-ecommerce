import tw, { styled, css, theme } from "twin.macro";
import { useKeenSlider } from "keen-slider/react";

import { useEffect, useMemo, useRef, useState } from "react";
import ProductOptions from "../../components/HomePage/ProductOptions";
import { Subtitle } from "../../components/HomePage/Typography";
import { useTranslation } from "react-i18next";

const Dots = styled.div`
  ${tw`space-x-2 flex justify-center relative py-3`}
  .dot {
    border: none;
    ${tw`rounded-xl`}
    width: 15px;
    height: 10px;
    background: #febad7;
    cursor: pointer;
    transition: width 0.5s;
  }

  .dot:focus {
    outline: none;
  }

  .dot.active {
    width: 25px;
    background: #fb2e86;
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

const LineClampStyle = css`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Product = ({ id, img, title, code, price }) => {
  const { t } = useTranslation();

  return (
    <div className="group" tw="bg-white text-navy-blue shadow-md w-full">
      <div tw="relative py-12 bg-gray-50 group-hover:bg-white">
        <div tw="absolute top-0 left-0 invisible group-hover:visible">
          <ProductOptions />
        </div>
        <img
          src={img}
          width="100%"
          height="auto"
          style={{ maxWidth: 120 }}
          tw="block mx-auto"
        />
        <div tw="pb-2 flex justify-center absolute bottom-0 left-0 w-full invisible p-3 group-hover:visible">
          <button
            tw="px-4 py-2 text-white rounded"
            style={{ backgroundColor: "#08D15F" }}
            onClick={() => alert(code)}>
            <span tw="text-sm">{t("common.viewDetails")}</span>
          </button>
        </div>
      </div>
      <div
        tw="flex flex-col space-y-2 text-center py-3 px-2 group-hover:(text-white bg-my-blue)"
        style={{ minHeight: 150 }}>
        <h5
          css={[
            tw`font-semibold text-lg text-my-pink group-hover:text-white`,
            LineClampStyle,
          ]}>
          {id}-{title}
        </h5>
        <p tw="font-normal">{`Code - ${code}`}</p>
        <span tw="text-lg font-light">{`$${price}`}</span>
      </div>
    </div>
  );
};

const FreaturedProducts = () => {
  const { t } = useTranslation();

  return (
    <>
      <Subtitle tw="pb-5">{t("pages.home.featureText_1")}</Subtitle>
      <SliderWrapper>
        {[...Array(16).keys()].map((idx) => (
          <div key={idx} className="keen-slider__slide" tw="p-1">
            <Product
              id={idx}
              code="Y523201"
              price="42.00"
              title={
                idx % 2 === 0
                  ? "Cantilever chair Cantilever chair Cantilever chair"
                  : "Cantilever chair"
              }
              img="https://pngimg.com/uploads/chair/chair_PNG6893.png"
            />
          </div>
        ))}
      </SliderWrapper>
    </>
  );
};

export default FreaturedProducts;
