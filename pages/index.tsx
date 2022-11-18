import Head from "next/head";
import Image from "next/image";

import { Container } from '@chakra-ui/react'
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Grassroot</title>
        <meta
          name="description"
          content="Grassroot is a all in one DAO Solution for all your needs."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </div>
  );
}
