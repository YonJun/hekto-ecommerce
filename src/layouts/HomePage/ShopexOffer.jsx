import tw from "twin.macro";
import { Subtitle } from "../../components/HomePage/Typography";
import { Container } from "@chakra-ui/layout";

const Card = ({ img, title, description }) => {
  return (
    <div tw="p-5 shadow-lg bg-white text-center flex flex-col justify-center items-center">
      <img src={img} tw="block w-16 h-auto" />
      <h5 tw="text-xl font-bold text-navy-blue">{title}</h5>
      <p>{description}</p>
    </div>
  );
};

const ShopexOffer = () => {
  return (
    <>
      <Container maxW="container.lg">
        <Subtitle tw="pb-7">What Shopex Offer!</Subtitle>
        <div tw="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-4">
          {[
            "/assets/free-delivery.png",
            "/assets/24-hours-support.png",
            "/assets/premium-quality.png",
            "/assets/free-delivery.png",
          ].map((src) => (
            <Card
              key={src}
              img={src}
              title="24/7 Support"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
            />
          ))}
        </div>
      </Container>
    </>
  );
};

export default ShopexOffer;
