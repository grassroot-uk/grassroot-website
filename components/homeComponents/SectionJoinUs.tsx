import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import SignupForm from "../SignupForm";

const SectionJoinUs = () => {
  return (
    <Box
      backgroundColor={"brand.800"}
      position={"relative"}
      mt={{ base: "50px", md: "80px" }}
    >
      <Box
        backgroundImage={"./light_blue_wavey_background-lr.png"}
        position={"absolute"}
        backgroundRepeat={"no-repeat"}
        top={"0px"}
        left={"0px"}
        height={"100%"}
        width={"100%"}
        backgroundSize={"contain"}
      />
      <Box
        backgroundImage={"./light_blue_wavey_background-rl.png"}
        position={"absolute"}
        backgroundRepeat={"no-repeat"}
        top={"0px"}
        right={"0px"}
        height={"100%"}
        width={"100%"}
        backgroundSize={"contain"}
        backgroundPosition={"right"}
      />
      <Box
        p={"10px"}
        maxWidth={"1280px"}
        minH={"400px"}
        margin={"auto"}
        pb={"30px"}
        zIndex={2}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignContent={"center"}
          justifyContent={"center"}
          mt={"100px"}
        >
          <Heading color={"white"} textAlign={"center"} my={"20px"} zIndex={2}>
            Join us on our mission.
          </Heading>
          <SignupForm buttonText="Join" />
        </Box>
      </Box>
    </Box>
  );
};

export default SectionJoinUs;
