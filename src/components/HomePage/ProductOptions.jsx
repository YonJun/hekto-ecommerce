import tw, { css, styled } from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const IconButton = styled.button`
  width: 30px;
  height: 30px;
  color: #189df4;

  ${tw`p-1 text-center flex items-center justify-center rounded-full hover:(text-my-blue shadow)`}
  &:hover {
    background-color: #eeeffb;
  }
`;

const ProductOptions = ({ vertical = false }) => {
  return (
    <>
      <div
        css={[
          tw`flex p-3`,
          !vertical && tw`space-x-4`,
          vertical && tw`flex-col space-y-4`,
        ]}>
        <IconButton>
          <FontAwesomeIcon icon={["fas", "shopping-cart"]} />
        </IconButton>
        <IconButton>
          <FontAwesomeIcon icon={["far", "heart"]} />
        </IconButton>
        <IconButton>
          <FontAwesomeIcon icon={["fas", "search-plus"]} />
        </IconButton>
      </div>
    </>
  );
};

export default ProductOptions;
