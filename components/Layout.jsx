import Head from "next/head";
import React from "react";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Header from "./Header";
import HeroBanner from "./HeroBanner";
import Navbar from "./Navbar";
import Projects from "./Projects";

const Layout = ({ children }) => {
  return (
    <div className="layoutContainer">
      <Head>
        <title>Roberto Cedeno</title>
      </Head>
      <header>
        <Header />
      </header>
      <Navbar />
      <HeroBanner />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
};

export default Layout;
