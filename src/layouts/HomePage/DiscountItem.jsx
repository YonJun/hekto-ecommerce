import tw, { theme } from "twin.macro";
import { Subtitle } from "../../components/HomePage/Typography";
import { Button } from "@chakra-ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DiscountItem = () => {
  return (
    <>
      <Subtitle tw="pb-5">Discount Item</Subtitle>
      <ul tw="pb-5 text-navy-blue  text-xs md:text-base  flex space-x-5 justify-center list-none">
        <li tw="text-my-pink underline">
          <a href="/#">Wood Chair</a>
        </li>
        <li>
          <a href="/#">Plastic Chair</a>
        </li>
        <li>
          <a href="/#">Sofa Colletion</a>
        </li>
      </ul>
      <div tw="px-5 grid grid-flow-row grid-cols-1 md:grid-cols-2 place-items-center gap-5">
        <div tw="w-full">
          <h4 tw="pb-3 text-3xl font-bold text-navy-blue">
            20% Discount Of All Products
          </h4>
          <p tw="pb-3 text-xl text-my-pink">Eams Sofa Compact</p>
          <p tw="text-gray-400 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum.
          </p>
          <div tw="flex flex-wrap text-purple-400 py-5 text-sm">
            <div tw="w-full md:w-1/2">
              <h2 tw="mb-3">
                <FontAwesomeIcon icon={["fas", "check"]} />
                <span tw="pl-2 text-purple-300">
                  Material expose like metals
                </span>
              </h2>
            </div>
            <div tw="w-full md:w-1/2">
              <h2 tw="mb-3">
                <FontAwesomeIcon icon={["fas", "check"]} />
                <span tw="pl-2 text-purple-300">
                  Clear lines and geomatric figures
                </span>
              </h2>
            </div>
            <div tw="w-full md:w-1/2">
              <h2 tw="mb-3">
                <FontAwesomeIcon icon={["fas", "check"]} />
                <span tw="pl-2 text-purple-300">Simple neutral colours.</span>
              </h2>
            </div>
            <div tw="w-full md:w-1/2">
              <h2 tw="mb-3">
                <FontAwesomeIcon icon={["fas", "check"]} />
                <span tw="pl-2 text-purple-300">
                  Material expose like metals
                </span>
              </h2>
            </div>
          </div>
          <Button
            colorScheme="pink"
            borderRadius="1"
            paddingInline={10}
            backgroundColor={theme`colors[my-pink]`}>
            Shop Now
          </Button>
        </div>
        <div>
          <img
            src="/assets/TrendingProduct.png"
            width="100%"
            height="auto"
            style={{ maxWidth: 500 }}
            tw="block "
          />
        </div>
      </div>
    </>
  );
};

export default DiscountItem;
