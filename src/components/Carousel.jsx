import tw, { styled } from "twin.macro";
import { useKeenSlider } from "keen-slider/react";
import { useRef, useState, useEffect } from "react";

const Dots = styled.div`
  margin-top: -50px;
  ${tw`space-x-2 flex justify-center relative `}
`;
const Carousel = ({ children }) => {
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
    <>
      <div ref={sliderRef} className="keen-slider">
        {children}
      </div>

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
    </>
  );
};

export default Carousel;
