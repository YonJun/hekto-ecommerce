import tw, { styled } from "twin.macro";
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
    <div tw="flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0">
      <a
        href="#"
        tw="px-2 py-1 text-sm  text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2">
        Home
      </a>
      <a
        href="#"
        tw="px-2 py-1 text-sm  text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2">
        About
      </a>
      <a
        href="#"
        tw="px-2 py-1 text-sm  text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2">
        Contact
      </a>
    </div>

    <div tw="relative">
      <input
        type="text"
        tw="w-full py-3 pl-3 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
        placeholder="Search"
      />
    </div>
  </>
);

const WrapperApp = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <nav tw="bg-white shadow dark:bg-gray-800">
        <Container maxW="container.lg">
          <div tw=" py-3 md:flex">
            <div tw="flex items-center justify-between">
              <div>
                <a
                  tw="text-2xl  text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
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
            <div tw="w-full hidden md:flex md:items-center md:justify-between">
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
