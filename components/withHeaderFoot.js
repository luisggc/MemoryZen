import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const withHeaderFoot = (Component) => {
  return () => (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Component />
      </main>
      <Footer />
    </>
  );
};

export default withHeaderFoot;
