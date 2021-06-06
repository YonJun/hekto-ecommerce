import tw from "twin.macro";
import { Subtitle } from "../../components/HomePage/Typography";

const Card = () => {
  return (
    <div
      tw="w-full rounded-xl bg-white overflow-auto shadow-sm"
      style={{ maxWidth: 350 }}>
      <img
        src="https://sodimac.decolovers.cl/blog/wp-content/uploads/2020/08/900-seccional-nube_3430987.jpg"
        tw="w-full h-auto block"
      />
      <div tw="py-3 px-2"></div>
    </div>
  );
};
const LeatestBlog = () => {
  return (
    <>
      <Subtitle tw="mb-10">Leatest Blog</Subtitle>
      <Card />
    </>
  );
};

export default LeatestBlog;
