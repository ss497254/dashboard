import { AppProps } from "next/app";
import Router from "next/router";
import { NextPageContext } from "next/types";
import NProgress from "nprogress";
import { Head } from "src/components/Head";
import { ToastContainer } from "src/components/ToastContainer";
import { Layout } from "src/components/layout";
import { useConfigStore } from "src/stores/useConfigStore";
import "src/styles/fonts.css";
import "src/styles/globals.css";
import "src/styles/loading-animation.css";
import "src/styles/modal.css";
import "src/styles/nprogress.css";
import "src/styles/scrollbar.css";
import "src/styles/toast.css";
import { PageComponent } from "src/types/PageComponent";
import Error404 from "./404";

Router.events.on("routeChangeStart", NProgress.start);
Router.events.on("routeChangeComplete", NProgress.done);
Router.events.on("routeChangeError", NProgress.done);

function App({
  Component,
  pageProps,
}: AppProps & { Component: PageComponent<NextPageContext> }) {
  const user = useConfigStore((state) => state.user);

  if (Component.auth) {
    if (!user) {
      Router.replace("/login");
      return <Error404 />;
    }

    return (
      <>
        <Head />
        <Layout>
          <ToastContainer />
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }

  return (
    <>
      <Head />
      <Component {...pageProps} />
    </>
  );
}

export default App;
