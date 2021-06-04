import { Container } from "@chakra-ui/layout";

import tw, { styled } from "twin.macro";
import Carousel from "../layouts/HomePage/Carousel";
import FreaturedProducts from "../layouts/HomePage/FeaturedProducts";
import LatestTrendingProducts from "../layouts/HomePage/LatestTrendingProducts";
import LeatestProducts from "../layouts/HomePage/LeatestProducts";
import ShopexOffer from "../layouts/HomePage/ShopexOffer";
import TrendingProducts from "../layouts/HomePage/TrendingProducts";

const CustomBgWrapper = styled.div`
  background-color: #f2f0ff;
`;
export default function Home() {
  return (
    <>
      <CustomBgWrapper>
        <Carousel />
      </CustomBgWrapper>
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
      <CustomBgWrapper tw="my-24">
        <Container maxW="container.lg">
          <div tw="py-5">
            <LatestTrendingProducts />
          </div>
        </Container>
      </CustomBgWrapper>
      <Container maxW="container.lg">
        <div tw="py-5">
          <TrendingProducts />
        </div>
      </Container>
    </>
  );
}
