import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tw from "twin.macro";
import { Subtitle } from "../../components/HomePage/Typography";

const Card = () => {
  return (
    <div tw="w-full rounded-lg bg-white overflow-auto shadow-md">
      <img
        src="https://sodimac.decolovers.cl/blog/wp-content/uploads/2020/08/900-seccional-nube_3430987.jpg"
        tw="w-full h-auto block rounded-lg"
      />
      <div tw="p-5 text-navy-blue">
        <div tw="pb-5">
          <p tw="inline-block">
            <FontAwesomeIcon tw="text-my-pink" icon={["fas", "pen-fancy"]} />
            <span tw="pl-2 font-medium">Saber Ali</span>
          </p>
          <p tw="ml-10 inline-block">
            <FontAwesomeIcon
              tw="text-yellow-400"
              icon={["far", "calendar-alt"]}
            />
            <span tw="pl-2 font-medium">21 August,2020</span>
          </p>
        </div>
        <div tw="space-y-3">
          <h6 tw="font-bold text-lg">
            <a href="#" tw="hover:text-my-pink">
              Top esssential Trends in 2021
            </a>
          </h6>
          <p tw="text-gray-500 text-sm">
            More off this less hello samlande lied much over tightly circa horse
            taped mightly
          </p>
          <p>
            <a href="#" tw="underline hover:text-my-pink">
              Read More
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
const LeatestBlog = () => {
  return (
    <>
      <Subtitle tw="mb-10">Leatest Blog</Subtitle>
      <div tw="grid grid-flow-row place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 ">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default LeatestBlog;
