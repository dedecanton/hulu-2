import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Nav */}
      {/* Results */}
    </div>
  );
};

export default Home;
