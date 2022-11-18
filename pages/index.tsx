import Head from "next/head";

import Navbar from "../components/Navbar";
import HomeBody from "../components/HomeBody";

export default function Home() {
  return (
    <div
      style={{
        background: `url("/bg.png")`,
        minHeight: "100vh",
        backgroundSize: "100%",
        backgroundPosition: "left top",
      }}
    >
      <Head>
        <title>Grassroot</title>
        <meta
          name="description"
          content="Grassroot is a all in one DAO Solution for all your needs."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HomeBody />
    </div>
  );
}
