import { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import { NextPageContext } from "next/types";
import NProgress from "nprogress";
import React from "react";
import { Layout } from "src/modules/layout";
import "src/styles/globals.css";
import "src/styles/loading-animation.css";
import "src/styles/nprogress.css";
import { PageComponent } from "src/types/PageComponent";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function App({
  Component,
  pageProps,
}: AppProps & { Component: PageComponent<NextPageContext> }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no, user-scalable=0"
        />
        <link
          rel="apple-touch-startup-image"
          href="android-chrome-512x512.png"
        />
        <meta name="theme-color" content="#151a21" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        ></link>
      </Head>
      {Component.auth ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default App;
