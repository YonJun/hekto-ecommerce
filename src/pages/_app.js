import GlobalStyles from "../components/GlobalStyles";
import WrapperApp from "../layouts/WrapperApp";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: null,
      },
    },
  },
});

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <ChakraProvider theme={customTheme}>
      <WrapperApp>
        <Component {...pageProps} />
      </WrapperApp>
    </ChakraProvider>
  </>
);

export default App;
