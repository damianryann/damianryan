import { FunctionComponent } from "react";

import type { AppProps } from "next/app";

import "@/styles/globals.scss";

const Application: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default Application;
