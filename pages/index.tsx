import type { ReactElement } from "react";
import Home from "../src/views/home/Home";
import type { NextPageWithLayout } from "./_app";
import Layout from "../src/components/layout/Layout";

const HomePage: NextPageWithLayout = () => {
  return <Home />;
};

export default HomePage;

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
