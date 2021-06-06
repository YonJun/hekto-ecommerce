import { Container } from "@chakra-ui/layout";
import tw, { styled } from "twin.macro";
import { Button } from "../components/Button";
import { Subtitle } from "../components/HomePage/Typography";
import Carousel from "../layouts/HomePage/Carousel";
import DiscountItem from "../layouts/HomePage/DiscountItem";
import FreaturedProducts from "../layouts/HomePage/FeaturedProducts";
import LatestTrendingProducts from "../layouts/HomePage/LatestTrendingProducts";
import LeatestProducts from "../layouts/HomePage/LeatestProducts";
import ShopexOffer from "../layouts/HomePage/ShopexOffer";
import TopCategories from "../layouts/HomePage/TopCategories";
import TrendingProducts from "../layouts/HomePage/TrendingProducts";

const BackgroundRectangle = styled.div`
  ${tw`relative w-full`}
  img {
    ${tw`absolute top-0 left-0 right-0 bottom-0 w-full h-full`}
    object-fit: cover;
    object-position: center;
  }
  .content {
    ${tw`py-20 relative`}
    z-index: 1;
  }
`;

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
        <div tw="py-5">
          <DiscountItem />
        </div>
        <div tw="py-5">
          <TopCategories />
        </div>
      </Container>
      <BackgroundRectangle tw="relative">
        <img src="/assets/bg_rectangle.png" />
        <div className="content">
          <Container maxW="container.sm" tw="flex flex-col items-center">
            <Subtitle tw="mb-5">
              Get Leatest Update By Subscribe 0ur Newslater
            </Subtitle>
            <Button>Shop Now</Button>
          </Container>
        </div>
      </BackgroundRectangle>
    </>
  );
}
