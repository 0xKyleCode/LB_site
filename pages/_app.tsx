import type { ReactElement, ReactNode } from "react";
import * as React from "react";

import type { NextPage } from "next";
import type { AppProps } from "next/app";
import NextHead from "next/head";
import Router from "next/router";

import nProgress from "nprogress";
import "nprogress/nprogress.css";

import { ConnectKitProvider } from "connectkit";
import { WagmiConfig } from "wagmi";
import { client } from "src/wagmi";

import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";

import ThemeProvider from "src/theme/ThemeProvider";
import createEmotionCache from "src/createEmotionCache";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: NextPageWithLayout;
}

function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);
  Router.events.on("routeChangeStart", nProgress.start);
  Router.events.on("routeChangeError", nProgress.done);
  Router.events.on("routeChangeComplete", nProgress.done);

  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  return (
    <CacheProvider value={emotionCache}>
      <NextHead>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </NextHead>
      <ThemeProvider>
        <CssBaseline />
        <WagmiConfig client={client}>
          <ConnectKitProvider>
            <NextHead>
              <title>Personal Liquidity Book Manager</title>
            </NextHead>

            {mounted && <Component {...pageProps} />}
          </ConnectKitProvider>
        </WagmiConfig>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
