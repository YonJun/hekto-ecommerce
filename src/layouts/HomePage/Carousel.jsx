import tw, { css, styled, theme } from "twin.macro";
import { Container } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useKeenSlider } from "keen-slider/react";
import { useRef, useState, useEffect } from "react";

const Dots = styled.div`
  ${tw`space-x-2 flex justify-center relative`}
`;
const SlidersWrapper = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [pause, setPause] = useState(false);
  const timer = useRef();
  const [sliderRef, slider] = useKeenSlider({
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

  return (
    <div tw="relative">
      <div ref={sliderRef} className="keen-slider">
        {children}
      </div>
      <div tw="absolute bottom-5 w-full">
        {slider && (
          <Dots>
            {[...Array(slider.details().size).keys()].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    slider.moveToSlideRelative(idx);
                  }}>
                  {currentSlide === idx ? (
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect
                        y="7.53552"
                        width="10"
                        height="9.8913"
                        transform="rotate(-45 0 7.53552)"
                        fill="#FB2E86"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect
                        x="0.707107"
                        y="7.07104"
                        width="9"
                        height="8.8913"
                        transform="rotate(-45 0.707107 7.07104)"
                        stroke="#FB2E86"
                      />
                    </svg>
                  )}
                </button>
              );
            })}
          </Dots>
        )}
      </div>
    </div>
  );
};

const Silder = styled.div`
  height: auto;
  min-height: 65vh;
`;
export default function Carousel() {
  return (
    <>
      <SlidersWrapper>
        <Silder className="keen-slider__slide">
          <Container maxW="container.lg" tw="w-full h-full">
            <div tw="relative flex flex-col items-center 2xl:(flex-row)  h-full py-5">
              <img
                src="/assets/sofa_promotional_header.png"
                alt="Sofa"
                style={{ width: "30vw", minWidth: 300 }}
                height="auto"
                tw="relative 2xl:(block absolute -right-40 )"
              />
              <div tw="flex-col space-y-3  2xl:w-8/12 ">
                <p tw="text-my-pink font-medium">
                  Best Furniture For Your Castle....
                </p>
                <h1 tw="font-black text-5xl leading-tight">
                  New Furniture Collection Trends in 2020
                </h1>
                <p tw="w-10/12" css={css({ color: "#8A8FB9" })}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in phasellus non in justo.
                </p>
                <div>
                  <Button
                    borderRadius="2px"
                    colorScheme="pink"
                    backgroundColor={theme`colors[my-pink]`}>
                    Shop Now
                  </Button>
                </div>
              </div>
              <img
                src="/assets/image_32.png"
                alt="Lampara"
                width="100%"
                height="auto"
                tw="hidden 2xl:(block absolute -left-72 w-80 h-80 top-0)"
              />
            </div>
          </Container>
        </Silder>
        <Silder className="keen-slider__slide">
          <Container maxW="container.lg" tw="w-full h-full">
            <div tw="relative flex flex-col items-center 2xl:(flex-row)  h-full">
              <img
                src="/assets/sofa_promotional_header.png"
                alt="Sofa"
                style={{ width: "30vw", minWidth: 300 }}
                height="auto"
                tw="relative 2xl:(block absolute -right-40 )"
              />
              <div tw="flex-col space-y-3 2xl:w-8/12">
                <p tw="text-my-pink font-medium">
                  Best Furniture For Your Castle....
                </p>
                <h1 tw="font-black text-5xl leading-tight">
                  New Furniture Collection Trends in 2020
                </h1>
                <p tw="w-10/12" css={css({ color: "#8A8FB9" })}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in phasellus non in justo.
                </p>
                <div>
                  <Button
                    borderRadius="2px"
                    colorScheme="pink"
                    backgroundColor={theme`colors[my-pink]`}>
                    Shop Now
                  </Button>
                </div>
              </div>
              <img
                src="/assets/image_32.png"
                alt="Lampara"
                width="100%"
                height="auto"
                tw="hidden 2xl:(block absolute -left-72 w-80 h-80 top-0)"
              />
            </div>
          </Container>
        </Silder>
      </SlidersWrapper>
    </>
  );
}
