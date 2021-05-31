import tw, { styled, css } from "twin.macro";
import { Container } from "@chakra-ui/layout";
import { useRef, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const ListLink = () => (
  <>
    <div tw="flex flex-col py-3 md:(flex-row space-x-7 mx-0 py-0)">
      {["Home", "Pages", "Products", "Blog", "Shop", "Contact"].map(
        (label, index) => (
          <a
            key={label}
            href="#"
            css={[
              tw`py-1 text-sm  transition-colors duration-200 transform  dark:text-gray-200  hover:text-my-pink md:mx-2`,
              index === 0 && tw`text-my-pink`,
            ]}>
            {label}
          </a>
        ),
      )}
    </div>

    <div tw="relative ">
      <input
        type="text"
        tw="w-full lg:w-72 p-1 pl-2 pr-10 text-gray-700 bg-white border border-gray-300 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
        placeholder="Search..."
      />
      <button tw="bg-my-pink absolute inset-y-0 right-0 flex items-center p-2 rounded-r">
        <svg tw="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"></path>
        </svg>
      </button>
    </div>
  </>
);

const WrapperApp = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <nav tw="bg-white shadow dark:bg-gray-800">
        <div tw="bg-my-purple text-white">
          <Container maxW="container.lg" tw="flex py-2 text-sm justify-between">
            <div tw="text-left">
              <p tw="inline-block">demo@gmail.com</p>
              <p tw="inline-block ml-5">(12345)67890</p>
            </div>
            <ul tw="flex list-none space-x-5">
              <li>English</li>
              <li>USD</li>
              <li>Login</li>
              <li>Wishlist</li>
              <li>5</li>
            </ul>
          </Container>
        </div>
        <Container maxW="container.lg">
          <div tw=" py-3 md:flex text-navy-blue">
            <div tw="flex items-center justify-between">
              <div>
                <a
                  tw="text-2xl font-extrabold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
                  href="#">
                  Hekto
                </a>
              </div>

              <div tw="flex md:hidden">
                <button
                  onClick={onOpen}
                  type="button"
                  tw="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu">
                  <svg viewBox="0 0 24 24" tw="w-6 h-6 fill-current">
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div tw="w-full hidden md:(flex items-center justify-between ml-10)">
              <ListLink />
            </div>
          </div>

          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Create your account</DrawerHeader>

              <DrawerBody>
                <ListLink />
              </DrawerBody>

              <DrawerFooter>footer</DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Container>
      </nav>
      {children}
    </>
  );
};

export default WrapperApp;
