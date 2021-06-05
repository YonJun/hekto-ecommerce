import React from "react";
import { createGlobalStyle } from "styled-components";
import tw, { theme, GlobalStyles as BaseStyles } from "twin.macro";

const CustomStyles = createGlobalStyle`
.__next,
#__next {
 --pantone-purple: #E0D3F5;
 --sky-blue: #F3F9FF;
 --my-blue: #2F1AC4;
 --my-red: #FB2448;
 --off-navy-blue: #3F509E;
 --off-blue: #151875;
 --navy-blue: #151875;
 --my-purple: #7E33E0;
 --off-purple: #9F63B5;
 --my-pink: #FB2E86;
}

  body {
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};
    font-family: 'Josefin Sans', sans-serif;
    ${tw`antialiased`}    
    
    

   }

  .btn{
    ${tw`px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700`}

  }

`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
