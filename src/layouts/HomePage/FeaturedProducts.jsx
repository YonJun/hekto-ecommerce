import tw, { css } from "twin.macro";
import { useKeenSlider } from "keen-slider/react";
import { Container } from "@chakra-ui/layout";

const LineClampStyle = css`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
const Product = ({ img, title, code, price }) => {
  return (
    <div className="group" tw="bg-white text-navy-blue shadow-md w-full">
      <div tw="relative bg-gray-50 py-5">
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
            tw="px-4 py-2 text-white bg-green-500 rounded"
            onClick={() => alert(code)}>
            View Details
          </button>
        </div>
      </div>
      <div tw="flex flex-col space-y-2 text-center py-3 px-2 group-hover:(bg-my-blue text-white)">
        <h5
          css={[
            tw`font-semibold text-lg text-my-pink group-hover:text-white`,
            LineClampStyle,
          ]}>
          {title}
        </h5>
        <p tw="font-normal">{`Code - ${code}`}</p>
        <span tw="text-lg font-light">{`$${price}`}</span>
      </div>
    </div>
  );
};

const FreaturedProducts = () => {
  const [sliderRef] = useKeenSlider({ slidesPerView: 4, spacing: 15 });

  return (
    <Container maxW="container.lg">
      <div tw="">
        <h2 tw="text-3xl font-bold text-navy-blue text-center pb-5">
          Featured Products
        </h2>
        <div ref={sliderRef} className="keen-slider">
          {[...Array(16).keys()].map((idx) => (
            <div key={idx} className="keen-slider__slide" tw="p-1">
              <Product
                code="Y523201"
                price="42.00"
                title="Cantilever chair Cantilever chairCantilever chair"
                img="https://i.pinimg.com/originals/82/34/5d/82345d989630d9b4b8dcca81eb317c46.png"
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default FreaturedProducts;
