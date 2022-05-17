import Head from "next/head";
import React from "react";
import AboutMe from "./AboutMe";
import Header from "./Header";
import HeroBanner from "./HeroBanner";

const Layout = ({ children }) => {
  return (
    <div className="layoutContainer">
      <Head>
        <title>Roberto Cedeno</title>
      </Head>
      <header>
        <Header />
      </header>
      <HeroBanner />
      <AboutMe />
    </div>
  );
};

export default Layout;
