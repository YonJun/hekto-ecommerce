import { Button } from "@chakra-ui/button";
import tw, { theme } from "twin.macro";
const LatestTrendingProducts = () => {
  return (
    <>
      <div tw="px-5 grid grid-flow-row grid-cols-1 md:grid-cols-2 place-items-center gap-10">
        <div>
          <img
            src="/assets/TrendingProduct.png"
            width="100%"
            height="auto"
            style={{ maxWidth: 400 }}
            tw="block"
          />
        </div>
        <div tw="w-full">
          <h4 tw="text-3xl font-bold text-navy-blue">
            Unique Features Of leatest & Trending Poducts
          </h4>
          <ul tw="list-none py-6 space-y-2 text-gray-400">
            <li tw="flex flex-wrap">
              <div tw="mt-1 w-3 h-3 bg-my-pink rounded-full" />
              <div tw="w-11/12 ml-3">
                All frames constructed with hardwood solids and laminates
              </div>
            </li>
            <li tw="flex flex-wrap">
              <div tw="mt-1 w-3 h-3 bg-my-blue rounded-full" />
              <div tw="w-11/12 ml-3">
                Reinforced with double wood dowels, glue, screw - nails corner
                blocks and machine nails
              </div>
            </li>
            <li tw="flex flex-wrap">
              <div tw="mt-1 w-3 h-3 bg-green-300 rounded-full" />
              <div tw="w-11/12 ml-3">
                Arms, backs and seats are structurally reinforced
              </div>
            </li>
          </ul>
          <div tw="flex items-center space-x-5">
            <Button
              colorScheme="pink"
              borderRadius="1"
              paddingInline={10}
              backgroundColor={theme`colors[my-pink]`}>
              Add To Cart
            </Button>

            <div tw="text-my-blue">
              <div tw="font-bold text-sm"> B&B Italian Sofa </div>
              <div tw="text-xs"> $32.00</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestTrendingProducts;
