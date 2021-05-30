import tw, { styled } from "twin.macro";

const StyledInput = styled.input`
  color: black;
  ${tw`border`}
  ${({ hasBorder }) => hasBorder && tw`border-purple-500`}
`;
const Input = () => <StyledInput hasBorder />;
export default function Home() {
  return (
    <div>
      <Input />
      <button className="btn">hola</button>
      <div tw="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div tw="flex items-center justify-between">
          <span tw="text-sm font-light text-gray-600 dark:text-gray-400">
            Mar 10, 2019
          </span>
          <a tw="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">
            Design
          </a>
        </div>
        <div tw="mt-2">
          <a
            href="#"
            tw="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">
            Accessibility tools for designers and developers
          </a>
          <p tw="mt-2 text-gray-600 dark:text-gray-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
            enim reprehenderit nisi, accusamus delectus nihil quis facere in
            modi ratione libero!
          </p>
        </div>
        <div tw="flex items-center justify-between mt-4">
          <a href="#" tw="text-blue-600 dark:text-blue-400 hover:underline">
            Read more
          </a>
          <div tw="flex items-center">
            <img
              tw="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
              src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
              alt="avatar"
            />
            <a tw="font-bold text-gray-700 cursor-pointer dark:text-gray-200">
              Khatab wedaa
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
