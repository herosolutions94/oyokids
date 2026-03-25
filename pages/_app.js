import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

import "../styles/style.scss";

import Layout from "../components/layout";

export default function App({ Component, pageProps }) {
  const renderWithLayout =
    Component.getLayout ||
    function (page) {
      return <Layout>{page}</Layout>;
    };

  return renderWithLayout(<Component {...pageProps} />);
}
