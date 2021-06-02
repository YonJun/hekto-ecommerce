import tw from "twin.macro";
import Carousel from "../layouts/HomePage/Carousel";
import FreaturedProducts from "../layouts/HomePage/FeaturedProducts";
import LeatestProducts from "../layouts/HomePage/LeatestProducts";

export default function Home() {
  return (
    <>
      <Carousel />
      <div tw="py-5">
        <FreaturedProducts />
      </div>
      <div tw="py-5">
        <LeatestProducts />
      </div>
    </>
  );
}
