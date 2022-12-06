import { ColorModeScript } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import theme from "../theme";

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <Script 
          type="text/javascript" 
          src="https://www.freeprivacypolicy.com/public/cookie-consent/4.0.0/cookie-consent.js" 
          charSet="UTF-8" 
          strategy="afterInteractive"
        ></Script>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_G_ANALYTICS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_G_ANALYTICS_ID}');
          `}
        </Script>
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
