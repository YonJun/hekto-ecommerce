import GlobalStyles from "../components/GlobalStyles";
import WrapperApp from "../layouts/WrapperApp";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "keen-slider/keen-slider.min.css";
import "../config/fontawesome";
import { isServer } from "../lib/isServer";
import { init_i18n } from "../lib/i18n";

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: null,
        bg: null,
      },
    },
  },
});

if (!isServer) {
  init_i18n();
}

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <ChakraProvider theme={customTheme} resetCSS={false}>
      <WrapperApp>
        <Component {...pageProps} />
      </WrapperApp>
    </ChakraProvider>
  </>
);

export default App;
