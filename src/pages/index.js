import tw, { css, styled, theme } from "twin.macro";
import { Container } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import Carousel from "../components/Carousel";

const Silder = styled.div`
  height: auto;
  min-height: 65vh;
  background-color: #f2f0ff;
`;
export default function Home() {
  return (
    <>
      <Carousel>
        <Silder className="keen-slider__slide">
          <Container maxW="container.lg" tw="w-full h-full">
            <div tw="relative flex flex-col items-center 2xl:(flex-row)  h-full py-5">
              <img
                src="/sofa_promotional_header.png"
                alt="Sofa"
                style={{ width: "30vw", minWidth: 300 }}
                height="auto"
                tw="relative 2xl:(block absolute -right-40 )"
              />
              <div tw="flex-col space-y-3  2xl:w-8/12 ">
                <p tw="text-my-pink font-medium">
                  Best Furniture For Your Castle....
                </p>
                <h1 tw="font-black text-5xl leading-tight">
                  New Furniture Collection Trends in 2020
                </h1>
                <p tw="w-10/12" css={css({ color: "#8A8FB9" })}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in phasellus non in justo.
                </p>
                <div>
                  <Button
                    borderRadius="2px"
                    colorScheme="pink"
                    backgroundColor={theme`colors[my-pink]`}>
                    Shop Now
                  </Button>
                </div>
              </div>
              <img
                src="/image_32.png"
                alt="Lampara"
                width="100%"
                height="auto"
                tw="hidden 2xl:(block absolute -left-60 w-80 h-80 top-0)"
              />
            </div>
          </Container>
        </Silder>
        <Silder className="keen-slider__slide">
          <Container maxW="container.lg" tw="w-full h-full">
            <div tw="relative flex flex-col items-center 2xl:(flex-row)  h-full">
              <img
                src="/sofa_promotional_header.png"
                alt="Sofa"
                style={{ width: "30vw", minWidth: 300 }}
                height="auto"
                tw="relative 2xl:(block absolute -right-40 )"
              />
              <div tw="flex-col space-y-3 2xl:w-8/12">
                <p tw="text-my-pink font-medium">
                  Best Furniture For Your Castle....
                </p>
                <h1 tw="font-black text-5xl leading-tight">
                  New Furniture Collection Trends in 2020
                </h1>
                <p tw="w-10/12" css={css({ color: "#8A8FB9" })}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in phasellus non in justo.
                </p>
                <div>
                  <Button
                    borderRadius="2px"
                    colorScheme="pink"
                    backgroundColor={theme`colors[my-pink]`}>
                    Shop Now
                  </Button>
                </div>
              </div>
              <img
                src="/image_32.png"
                alt="Lampara"
                width="100%"
                height="auto"
                tw="hidden 2xl:(block absolute -left-60 w-80 h-80 top-0)"
              />
            </div>
          </Container>
        </Silder>
      </Carousel>
    </>
  );
}
