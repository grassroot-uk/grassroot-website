import React from "react";
import { Box } from "@chakra-ui/react";
import Hero from "./homeComponents/Hero";
import SectionCards from "./homeComponents/SectionCards";
import SectionJoinUs from "./homeComponents/SectionJoinUs";

const HomeBody = () => {
  return (
    <Box w={"100%"}>
      <Hero />
      <SectionCards />
      <SectionJoinUs />
    </Box>
  );
};

export default HomeBody;
