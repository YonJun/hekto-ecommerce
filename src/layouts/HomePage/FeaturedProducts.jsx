import tw, { styled, css } from "twin.macro";
import { useKeenSlider } from "keen-slider/react";
import { Container } from "@chakra-ui/layout";
import { useEffect, useMemo, useRef, useState } from "react";

const Dots = styled.div`
  ${tw`space-x-2 flex justify-center relative py-3`}
  .dot {
    border: none;
    width: 10px;
    height: 10px;
    background: #c5c5c5;
    border-radius: 50%;

    cursor: pointer;
  }

  .dot:focus {
    outline: none;
  }

  .dot.active {
    background: #000;
  }
`;
const SliderWrapper = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [pause, setPause] = useState(false);
  const timer = useRef();

  const [sliderRef, slider] = useKeenSlider({
    slidesPerView: 4,
    spacing: 15,
    loop: true,
    duration: 1000,
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
      return parseInt(
        slider.details().size / slider.details().slidesPerView,
        10,
      );
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
              const newCurrentSlide = parseInt(currentSlide / countDots, 10);
              return (
                <button
                  key={idx}
                  onClick={() => {
                    slider.moveToSlideRelative(idx * countDots);
                  }}
                  className={"dot" + (newCurrentSlide === idx ? " active" : "")}
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
  return (
    <div
      className="group"
      tw="bg-white text-navy-blue shadow-md w-full hover:bg-my-blue"
      style={{ minHeight: 380 }}>
      <div tw="relative bg-gray-50 py-5 ">
        <div tw="bg-red-500 absolute flex space-x-4 top-0 left-0 invisible p-3 group-hover:visible">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
        <img
          src={img}
          width="100%"
          height="auto"
          style={{ maxWidth: 150 }}
          tw="block mx-auto"
        />
        <div tw="pb-2 flex justify-center absolute bottom-0 left-0 w-full invisible p-3 group-hover:visible">
          <button
            tw="px-4 py-2 text-white rounded"
            style={{ backgroundColor: "#08D15F" }}
            onClick={() => alert(code)}>
            <span tw="text-sm">View Details</span>
          </button>
        </div>
      </div>
      <div tw="flex flex-col space-y-2 text-center py-3 px-2 group-hover:(text-white)">
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
  return (
    <Container maxW="container.lg">
      <div tw="">
        <h2 tw="text-3xl font-bold text-navy-blue text-center pb-5">
          Featured Products
        </h2>
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
                img="https://i.pinimg.com/originals/82/34/5d/82345d989630d9b4b8dcca81eb317c46.png"
              />
            </div>
          ))}
        </SliderWrapper>
      </div>
    </Container>
  );
};

export default FreaturedProducts;
