import { AppProps } from "next/app";
import Router from "next/router";
import { NextPageContext } from "next/types";
import NProgress from "nprogress";
import React from "react";
import { Head } from "src/components/Head";
import { Layout } from "src/components/layout";
import "src/styles/globals.css";
import "src/styles/loading-animation.css";
import "src/styles/nprogress.css";
import "src/styles/scrollbar.css";
import { PageComponent } from "src/types/PageComponent";

Router.events.on("routeChangeStart", NProgress.start);
Router.events.on("routeChangeComplete", NProgress.done);
Router.events.on("routeChangeError", NProgress.done);

function App({
  Component,
  pageProps,
}: AppProps & { Component: PageComponent<NextPageContext> }) {
  return (
    <>
      <Head />
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
