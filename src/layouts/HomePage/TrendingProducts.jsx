import tw from "twin.macro";
import { Subtitle } from "../../components/HomePage/Typography";

const Card = () => {
  return (
    <div tw="p-2 shadow-md">
      <div tw="bg-gray-100">
        <img
          src="https://pngimg.com/uploads/chair/chair_PNG6893.png"
          width="100%"
          height="auto"
          style={{ maxWidth: 150 }}
          tw="block"
        />
      </div>
    </div>
  );
};
const TrendingProducts = () => {
  return (
    <>
      <Subtitle tw="pb-5">Trending Products</Subtitle>
      <Card />
    </>
  );
};

export default TrendingProducts;
