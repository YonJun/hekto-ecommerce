import tw from "twin.macro";
import { Container } from "@chakra-ui/layout";
import { Subtitle } from "../../components/HomePage/Typography";
import ProductOptions from "../../components/HomePage/ProductOptions";

const Product = ({ id, img, title, code, price }) => {
  return (
    <div className="group" tw="bg-white text-navy-blue shadow-md w-full">
      <div tw="relative py-5 bg-gray-50 group-hover:bg-white">
        <img
          src={img}
          width="100%"
          height="auto"
          style={{ maxWidth: 120 }}
          tw="block mx-auto"
        />
        <div tw="pb-2 flex justify-center absolute bottom-0 left-0 w-full invisible p-3 group-hover:visible">
          <button
            tw="px-4 py-2 text-white rounded"
            style={{ backgroundColor: "#08D15F" }}
            onClick={() => alert(code)}>
            <span tw="text-sm">View Details</span>
          </button>
        </div>
        <div tw="absolute bottom-0 left-0 invisible group-hover:visible">
          <ProductOptions vertical />
        </div>
      </div>
      <div
        tw="flex flex-col space-y-2 text-center py-3 px-2 group-hover:(text-white bg-my-blue)"
        style={{ minHeight: 150 }}>
        <h5 tw="font-semibold text-lg text-my-pink group-hover:text-white">
          {id}-{title}
        </h5>
        <p tw="font-normal">{`Code - ${code}`}</p>
        <span tw="text-lg font-light">{`$${price}`}</span>
      </div>
    </div>
  );
};
const LeatestProducts = () => {
  return (
    <Container maxW="container.lg">
      <Subtitle tw="pb-5">Leatest Products</Subtitle>
      <Product
        id={0}
        code="Y523201"
        price="42.00"
        title={"Cantilever chair"}
        img="https://pngimg.com/uploads/chair/chair_PNG6893.png"
      />
    </Container>
  );
};

export default LeatestProducts;
