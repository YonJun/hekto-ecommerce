import tw from "twin.macro";
import Carousel from "../layouts/HomePage/Carousel";
import FreaturedProducts from "../layouts/HomePage/FeaturedProducts";

export default function Home() {
  return (
    <>
      <Carousel />
      <div tw="py-5">
        <FreaturedProducts />
      </div>
    </>
  );
}
