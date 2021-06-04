import tw, { styled } from "twin.macro";
import { Subtitle } from "../../components/HomePage/Typography";

const Card = ({
  title = "Cantilever chair",
  price = "26.00",
  oldPrice = "42.00",
}) => {
  return (
    <div tw="p-2 shadow-md text-center text-navy-blue w-full">
      <div tw="bg-gray-100 flex justify-center">
        <img
          src="https://pngimg.com/uploads/chair/chair_PNG6893.png"
          width="100%"
          height="auto"
          style={{ maxWidth: 110 }}
          tw="block py-4"
        />
      </div>
      <div tw="py-3">
        <h5 tw="font-bold">{title}</h5>
        <div>
          <p tw="inline-block font-normal text-sm ">{`$${price}`}</p>
          {oldPrice && (
            <span tw="inline-block pl-3 text-xs text-gray-300 line-through">{`$${oldPrice}`}</span>
          )}
        </div>
      </div>
    </div>
  );
};
const OffCardsWrapper = styled.div`
  ${tw`grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`}
  .item_0 {
    background-color: #fff6fb;
  }
  .item_1 {
    background-color: #eeeffb;
  }
`;
const TrendingProducts = () => {
  return (
    <>
      <Subtitle tw="pb-5">Trending Products</Subtitle>
      <div tw="pb-10 grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:(grid-cols-4 items-stretch) gap-4">
        {[...Array(4).keys()].map((idx) => (
          <Card key={idx} />
        ))}
      </div>
      <OffCardsWrapper>
        <div className="item_0" tw="w-full p-5 relative flex flex-col">
          <h5 tw="text-navy-blue">23% off in all products</h5>
          <a tw="text-my-pink underline" href="/#">
            Shop Now
          </a>
          <div tw="self-end w-full h-40 flex items-center justify-end">
            <img
              src="https://pngimg.com/uploads/chair/chair_PNG6893.png"
              style={{ maxWidth: 90 }}
              tw="w-full h-auto "
            />
          </div>
        </div>
        <div className="item_1" tw="w-full p-5 relative flex flex-col">
          <h5 tw="text-navy-blue">23% off in all products</h5>
          <a tw="text-my-pink underline" href="/#">
            View Collection
          </a>
          <div tw="self-end w-full h-40 flex items-center justify-end">
            <img
              src="https://pngimg.com/uploads/chair/chair_PNG6893.png"
              style={{ maxWidth: 90 }}
              tw="w-full h-auto "
            />
          </div>
        </div>

        <div tw="w-full   grid grid-flow-row grid-cols-1 md:(grid-cols-3 col-span-2) lg:(grid-cols-1 col-span-1) gap-4">
          {[...Array(3).keys()].map((idx) => (
            <div key={idx} tw="w-full">
              <div tw="flex items-center space-x-2">
                <div tw="py-3 px-10 bg-gray-100">
                  <img
                    src="https://pngimg.com/uploads/chair/chair_PNG6893.png"
                    tw="w-full h-auto block"
                    style={{ maxWidth: 30 }}
                  />
                </div>
                <div tw="text-navy-blue">
                  <p tw="font-bold">Executive Seat chair</p>
                  <p tw="line-through text-xs">$32.00</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </OffCardsWrapper>
    </>
  );
};

export default TrendingProducts;
