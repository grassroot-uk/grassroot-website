import { ColorModeScript } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import theme from "../theme";

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <Script type="text/javascript" src="//www.freeprivacypolicy.com/public/cookie-consent/4.0.0/cookie-consent.js" charset="UTF-8"></Script>
      </Head>
      <body>
        {/* 👇 Here's the script */}
        <ColorModeScript initialColorMode={theme.config.initialColorMode} useColorModeValue={false} />
        <Main />
        <NextScript />
        <script async type="text/javascript" id="cookies-script" charset="UTF-8" src="/static/cookie-consent.js">
        </script>
        <a href="#" id="open_preferences_center">Update cookies preferences</a>
      </body>
    </Html>
  );
}
