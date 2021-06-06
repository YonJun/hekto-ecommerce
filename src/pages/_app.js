import GlobalStyles from "../components/GlobalStyles";
import WrapperApp from "../layouts/WrapperApp";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "keen-slider/keen-slider.min.css";
import "../config/fontawesome";

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
