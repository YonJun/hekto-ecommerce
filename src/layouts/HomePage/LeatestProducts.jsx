import tw, { styled, theme } from "twin.macro";
import { Container } from "@chakra-ui/layout";
import { Subtitle } from "../../components/HomePage/Typography";
import ProductOptions from "../../components/HomePage/ProductOptions";

const SaleText = styled.span`
  /* Abs positioning makes it not take up vert space */
  width: 100%;
  position: absolute;
  top: 33px;
  left: 0;
  text-align: center;

  /* Border is the new background */
  background: none;

  /* Rotate from top left corner (not default) */
  transform-origin: 0 0;
  transform: rotate(-20deg);
`;

const Sale = () => {
  return (
    <div tw="relative inline-block">
      <img
        src="/assets/flag_indicator.png"
        width="100%"
        height="auto"
        style={{ maxWidth: 100 }}
        tw="block mx-auto"
      />
      <SaleText tw="text-white">Sale</SaleText>
    </div>
  );
};

const Product = ({ id, img, title, sale, price, oldPrice }) => {
  return (
    <div className="group" tw="bg-white text-navy-blue w-full">
      <div tw="relative py-5 bg-gray-50 group-hover:bg-white">
        {sale && (
          <div tw="absolute top-0 left-0">
            <Sale />
          </div>
        )}
        <div tw="absolute z-10 bottom-0 left-0 invisible group-hover:visible">
          <ProductOptions vertical />
        </div>
        <img
          src={img}
          width="100%"
          height="auto"
          style={{ maxWidth: 120 }}
          tw="block mx-auto"
        />
      </div>
      <div tw="flex py-2 justify-between">
        <h5 tw="border-b-2 border-sky-blue">{title}</h5>
        <div>
          <p tw="inline-block font-normal ">{`$${price}`}</p>
          {oldPrice && (
            <span tw="inline-block pl-3 text-sm text-my-pink line-through">{`$${oldPrice}`}</span>
          )}
        </div>
      </div>
    </div>
  );
};
const LeatestProducts = () => {
  console.log("Leatest Products", theme`colors.black`, theme`screens.lg`);
  return (
    <Container maxW="container.lg">
      <Subtitle tw="pb-5">Leatest Products</Subtitle>
      <ul tw="pb-5 text-navy-blue  md:text-xl  flex space-x-5 justify-center list-none">
        <li tw="text-my-pink underline">
          <a href="/#">New Arrival</a>
        </li>
        <li>
          <a href="/#">Best Seller</a>
        </li>
        <li>
          <a href="/#">Featured</a>
        </li>
        <li>
          <a href="/#">Special Offer</a>
        </li>
      </ul>
      <div tw="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4">
        {[...Array(6).keys()].map((idx) => (
          <Product
            key={idx}
            id={idx}
            sale={idx % 2 === 0}
            code="Y523201"
            price={idx % 2 === 0 ? "42.00" : "60.00"}
            title={"Comfort Handy Craft"}
            oldPrice={idx % 2 === 0 ? "60.00" : ""}
            img="https://pngimg.com/uploads/chair/chair_PNG6893.png"
          />
        ))}
      </div>
    </Container>
  );
};

export default LeatestProducts;
