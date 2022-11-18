import React from "react";
import {
  Flex,
  Text,
  Heading,
  Grid,
  GridItem,
  Box,
  useBreakpointValue,
  Button,
  useColorModeValue,
  InputRightElement,
  Input,
  InputGroup,
} from "@chakra-ui/react";

import register from "../public/register.png";
import fundraise from "../public/fundraise.png";
import manage from "../public/manage.png";
import communicate from "../public/communicate.png";
import FeatureCard from "./FeatureCard";
import { useWeb3React } from "@web3-react/core";

const services = [
  {
    heading: "Register",
    subText:
      "Set up your DAOs as legal entities overseas and protect your community",
    img: register,
  },
  {
    heading: "Fundraise",
    subText: "Raise money for a cause in an open and transparent manner",
    img: fundraise,
  },
  {
    heading: "Communicate",
    subText:
      "Communicate with your community in a secure and decentralized way",
    img: communicate,
  },
  {
    heading: "Manage",
    subText:
      "Manage your DAOs treasury by setting up streaming services for different purposes",
    img: manage,
  },
];

const HomeBody = () => {
  const [email, setEmail] = React.useState("");
  const handleChange = (event: any) => setEmail(event.target.value);

  const { account } = useWeb3React();

  const handleSubmitEmail = () => {
    if (!account) {
      window.alert("Connect Metamask!!");
    }
    console.log(email);
  };

  return (
    <Box>
      <Flex flexDirection={"column"} alignItems={"center"}>
        <Heading
          alignSelf={"center"}
          textAlign={"center"}
          as={"h1"}
          size={useBreakpointValue({ base: "xl", md: "2xl" })}
          mt={"70px"}
          px={useBreakpointValue({ base: "20px", md: "100px" })}
        >
          One-stop shop for all your DAO needs
        </Heading>
        <Text
          alignSelf={"center"}
          textAlign={"center"}
          fontSize={useBreakpointValue({ base: "18px", md: "24px" })}
          mt={"20px"}
          px={useBreakpointValue({ base: "20px", md: "100px" })}
        >
          Subtitle Here...
        </Text>
        <Box my={useBreakpointValue({ base: "50px", lg: "70px" })} px={"10px"}>
          <InputGroup size="lg">
            <Input
              pr="4.5rem"
              borderRadius={"50px"}
              type={"email"}
              placeholder="Enter your email.."
              value={email}
              onChange={handleChange}
              background={"white"}
            />
            <InputRightElement width="6.5rem">
              <Button
                bg={useColorModeValue("brand.700", "brand.500")}
                color={"white"}
                border={"1px"}
                borderRadius={"50px"}
                minH={"30px"}
                py={{ base: 2 }}
                px={{ base: 4 }}
                fontWeight={"normal"}
                _hover={{
                  color: useColorModeValue("brand.700", "brand.500"),
                  bg: "white",
                  borderColor: useColorModeValue("brand.700", "white"),
                }}
                onClick={handleSubmitEmail}
              >
                Sign Up
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
      </Flex>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Box p={5} maxWidth={"8xl"}>
          <Grid
            templateColumns={useBreakpointValue({
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            })}
            gap={6}
          >
            {services.map((service, index) => {
              return (
                <GridItem w="100%">
                  <FeatureCard
                    heading={service.heading}
                    img={service.img}
                    subText={service.subText}
                  />
                </GridItem>
              );
            })}
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default HomeBody;
