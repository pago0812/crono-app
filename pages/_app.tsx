import React, { FC } from "react";
import { AppLayoutProps } from "../interfaces";

const noLayout: FC = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const Layout = Component.layout || noLayout;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
