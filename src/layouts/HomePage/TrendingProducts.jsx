import tw from "twin.macro";
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
const TrendingProducts = () => {
  return (
    <>
      <Subtitle tw="pb-5">Trending Products</Subtitle>
      <div tw="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-4">
        {[...Array(4).keys()].map((idx) => (
          <Card key={idx} />
        ))}
      </div>
    </>
  );
};

export default TrendingProducts;
