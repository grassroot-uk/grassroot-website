import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Web3ReactProvider } from "@web3-react/core";
import '@fontsource/inter/400.css'
import '@fontsource/inter/700.css'

import getLibrary from "../getLibrary";
import theme from "../theme";



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Web3ReactProvider>
  );
}

export default MyApp;
