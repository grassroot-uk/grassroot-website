import Head from "next/head";

import Navbar from "../components/Navbar";
import HomeBody from "../components/HomeBody";
import Footer from "../components/Footer";

import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
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
      <Footer />
    </Box>
  );
}
