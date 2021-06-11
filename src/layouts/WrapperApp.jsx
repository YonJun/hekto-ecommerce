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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../components/Button";
import Link from "../components/Link";
import { useTranslation } from "react-i18next";

const ListLink = () => {
  const { t } = useTranslation();
  return (
    <>
      <ul tw="flex  flex-col py-3 text-sm  md:(flex-row items-center space-x-7 mx-0 py-0)">
        <li className="group" tw="relative">
          <Link activeClassName="active" href="/">
            <a>
              {t("header.home")}
              <FontAwesomeIcon tw="ml-1" icon={["fas", "angle-down"]} />
            </a>
          </Link>
          <div tw="hidden divide-y-2 divide-gray-200 relative md:absolute bg-white text-navy-blue text-sm z-10 md:(w-max shadow-xl  border border-gray-200 rounded-b-lg)   group-hover:block">
            <a tw="hover:text-my-pink px-5 py-1 block" href="#">
              Link 1
            </a>

            <a tw="hover:text-my-pink px-5 py-1 block" href="#">
              Link 2
            </a>
            <a tw="hover:text-my-pink px-5 py-1 block" href="#">
              Link 3
            </a>
          </div>
        </li>
        {[
          t("header.pages"),
          t("header.products"),
          t("header.blog"),
          t("header.shop"),
          t("header.contact"),
        ].map((label, index) => (
          <li
            key={index}
            css={[
              tw`py-1 transition-colors duration-200 transform  dark:text-gray-200  hover:text-my-pink md:mx-2`,
            ]}>
            <a href="#">{label}</a>
          </li>
        ))}
      </ul>

      <div tw="relative ">
        <input
          type="text"
          tw="w-full lg:w-72 p-1 pl-2 pr-10 text-gray-700 bg-white border border-gray-300 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
        />
        <button tw="bg-my-pink absolute inset-y-0 right-0 flex items-center p-2 rounded-r hover:bg-pink-600">
          <svg tw="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"></path>
          </svg>
        </button>
      </div>
    </>
  );
};

const WrapperApp = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const { i18n, t } = useTranslation();

  return (
    <>
      <nav tw="bg-white shadow dark:bg-gray-800">
        <div tw="bg-my-purple text-white">
          <Container
            maxW="container.lg"
            tw="flex py-2 text-sm justify-center md:justify-between">
            <div tw="text-left hidden md:block">
              <p tw="inline-block">
                <span tw="mr-2">
                  <FontAwesomeIcon icon={["far", "envelope"]} />
                </span>
                demo@gmail.com
              </p>
              <p tw="inline-block ml-5">
                <span tw="mr-2">
                  <FontAwesomeIcon icon={["fas", "phone"]} />
                </span>
                (12345)67890
              </p>
            </div>
            <ul tw="flex list-none space-x-5">
              <li className="group" tw="relative">
                <p tw="inline-block">{t("common.language")}</p>
                <span tw="ml-1">
                  <FontAwesomeIcon icon={["fas", "angle-down"]} />
                </span>
                <div tw="hidden divide-y-2 divide-gray-200 absolute bg-white text-navy-blue text-sm z-10 w-max shadow-xl border border-gray-200 rounded-b-lg group-hover:block">
                  <p
                    tw="hover:(text-my-pink cursor-pointer) px-5 py-1 block"
                    onClick={() => {
                      i18n.changeLanguage("en");
                    }}>
                    English
                  </p>
                  <p
                    tw="hover:(text-my-pink cursor-pointer) px-5 py-1 block"
                    onClick={() => {
                      i18n.changeLanguage("es");
                    }}>
                    Español
                  </p>
                </div>
              </li>
              <li className="group" tw="relative">
                <p tw="inline-block align-top">USD</p>
                <span tw="ml-1">
                  <FontAwesomeIcon icon={["fas", "angle-down"]} />
                </span>
                <div tw="hidden divide-y-2 divide-gray-200 absolute bg-white text-navy-blue text-sm z-10 w-max shadow-xl border border-gray-200 rounded-b-lg group-hover:block">
                  <a tw="hover:text-my-pink px-5 py-1 block" href="#">
                    Link 1
                  </a>

                  <a tw="hover:text-my-pink px-5 py-1 block" href="#">
                    Link 2
                  </a>
                  <a tw="hover:text-my-pink px-5 py-1 block" href="#">
                    Link 3
                  </a>
                </div>
              </li>
              <li>
                <button>
                  <span>{t("common.login")}</span>
                  <span tw="pl-1 lg:pl-2 text-xs">
                    <FontAwesomeIcon icon={["far", "user"]} />
                  </span>
                </button>
              </li>
              <li>
                <button>
                  <span>{t("common.wishlist")}</span>
                  <span tw="pl-1 lg:pl-2 text-xs">
                    <FontAwesomeIcon icon={["far", "heart"]} />
                  </span>
                </button>
              </li>
              <li>
                <button>
                  <FontAwesomeIcon icon={["fas", "shopping-cart"]} />
                </button>
              </li>
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
              <DrawerBody>
                <ListLink />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Container>
      </nav>
      {children}

      <footer>
        <div tw="bg-purple-50">
          <Container maxW="container.xl">
            <div tw="py-24">
              <div tw="flex flex-wrap md:text-left text-center order-first">
                <div tw="lg:w-2/5 md:w-1/2 w-full px-4 mb-5 md:mb-0">
                  <div tw="mb-5">
                    <a
                      tw="text-2xl font-extrabold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300  "
                      href="#">
                      Hekto
                    </a>
                  </div>

                  <div tw="relative  max-w-sm mx-auto md:mx-0">
                    <input
                      type="text"
                      tw="w-full bg-white bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-2 px-3 pr-32 leading-8 transition-colors duration-200 ease-in-out "
                      placeholder="Enter Email Address"
                    />
                    <div tw="absolute inset-y-0 right-0 p-1">
                      <Button>{t("common.signUp")}</Button>
                    </div>
                  </div>
                  <p
                    className="text-sub-color"
                    tw="text-base mt-5 md:text-left text-center">
                    {t("footer.conctactInfo")}
                    <br />
                    17 Princess Road, London, Greater London NW1 8JR, UK
                  </p>
                </div>

                <div tw="lg:w-1/5 md:w-1/2 w-full px-4 mb-10 lg:mb-0">
                  <h2 tw="font-bold text-black capitalize text-lg mb-2 md:mb-7">
                    {t("footer.categories")}
                  </h2>
                  <nav
                    className="text-sub-color"
                    tw="font-normal list-none space-y-3">
                    {[
                      t("footer.laptopsAndComputers"),
                      t("footer.camerasAndPhotography"),
                      t("footer.smartPhonesAndTablets"),
                      t("footer.videoGamesAndConsoles"),
                      t("footer.waterproofHeadphones"),
                    ].map((text, idx) => (
                      <li key={idx}>
                        <a>{text}</a>
                      </li>
                    ))}
                  </nav>
                </div>
                <div tw="lg:w-1/5 md:w-1/2 w-full px-4 mb-10 lg:mb-0">
                  <h2 tw="font-bold text-black capitalize text-lg mb-2 md:mb-7">
                    {t("footer.customerCare")}
                  </h2>
                  <nav
                    className="text-sub-color"
                    tw="font-normal list-none space-y-3">
                    {[
                      t("footer.myAccount"),
                      t("footer.discount"),
                      t("footer.returns"),
                      t("footer.ordersHistory"),
                      t("footer.orderTracking"),
                    ].map((text, idx) => (
                      <li key={idx}>
                        <a>{text}</a>
                      </li>
                    ))}
                  </nav>
                </div>
                <div tw="lg:w-1/5 md:w-1/2 w-full px-4 mb-10 lg:mb-0">
                  <h2 tw="font-bold text-black capitalize text-lg mb-2 md:mb-7">
                    {t("footer.pages")}
                  </h2>
                  <nav
                    className="text-sub-color"
                    tw="font-normal list-none space-y-3">
                    {[
                      t("footer.blog"),
                      t("footer.browsetheShop"),
                      t("footer.category"),
                      t("footer.preBuiltpages"),
                      t("footer.visualComposerElements"),
                      t("footer.woocommercepages"),
                    ].map((text, idx) => (
                      <li key={idx}>
                        <a>{text}</a>
                      </li>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div tw="bg-purple-100">
          <Container maxW="container.lg">
            <div tw="py-6 flex items-center sm:flex-row flex-col">
              <a tw="text-gray-400">
                ©Webecy - {t("footer.allRightsReserved")}
              </a>
              <span tw="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start space-x-4">
                <a tw="text-white bg-navy-blue p-2 rounded-full">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    tw="w-5 h-5"
                    viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a tw="text-white bg-navy-blue p-2 rounded-full">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    tw="w-5 h-5"
                    viewBox="0 0 24 24">
                    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                  </svg>
                </a>
                <a tw="text-white bg-navy-blue p-2 rounded-full">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    tw="w-5 h-5"
                    viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
              </span>
            </div>
          </Container>
        </div>
      </footer>
    </>
  );
};

export default WrapperApp;
