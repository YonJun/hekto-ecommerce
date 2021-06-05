import tw, { styled, theme } from "twin.macro";
import { Button } from "../../components/Button";
import { Subtitle } from "../../components/HomePage/Typography";

const ImgWrapper = styled.div`
  width: 260px;
  height: 260px;
  ${tw`p-10 rounded-full bg-gray-50`}
  &:hover {
    box-shadow: -5px 5px #9877e7;
  }
`;

const Card = () => {
  return (
    <div tw="flex flex-col items-center">
      <ImgWrapper className="group" tw="relative">
        <img
          src="https://pngimg.com/uploads/chair/chair_PNG6893.png"
          width="100%"
          height="auto"
          style={{ maxWidth: 100 }}
          tw="block mx-auto"
        />
        <div tw="absolute left-0 bottom-5 w-full flex justify-center invisible group-hover:visible">
          <Button size="xs" color="secondary">
            View Shop
          </Button>
        </div>
      </ImgWrapper>
      <div tw="py-3 text-center text-navy-blue ">
        <h5 tw="font-bold">Mini LCW Chair</h5>
        <p>$56.00</p>
      </div>
    </div>
  );
};

const TopCategories = () => {
  return (
    <>
      <Subtitle>Top Categories</Subtitle>

      <Card></Card>
    </>
  );
};

export default TopCategories;
