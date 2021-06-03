import { Container } from "@chakra-ui/layout";
import tw from "twin.macro";
import Carousel from "../layouts/HomePage/Carousel";
import FreaturedProducts from "../layouts/HomePage/FeaturedProducts";
import LeatestProducts from "../layouts/HomePage/LeatestProducts";
import ShopexOffer from "../layouts/HomePage/ShopexOffer";
import TrendingProducts from "../layouts/HomePage/TrendingProducts";

export default function Home() {
  return (
    <>
      <Carousel />
      <Container maxWidth="container.lg">
        <div tw="py-5">
          <FreaturedProducts />
        </div>
        <div tw="py-5">
          <LeatestProducts />
        </div>
        <div tw="py-5">
          <ShopexOffer />
        </div>
        <div tw="py-5">
          <TrendingProducts />
        </div>
      </Container>
    </>
  );
}
