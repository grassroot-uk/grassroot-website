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
  FormErrorMessage,
  FormControl,
  CircularProgress,
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
    imgStyles: { marginTop: "-200px", zIndex: 0 },
  },
  {
    heading: "Fundraise",
    subText: "Raise money for a cause in an open and transparent manner",
    img: fundraise,
    imgStyles: { marginTop: "-50px", zIndex: 0 },
  },
  {
    heading: "Communicate",
    subText:
      "Communicate with your community in a secure and decentralized way",
    img: communicate,
    imgStyles: { marginTop: "-20px", zIndex: 0 },
  },
  {
    heading: "Manage",
    subText:
      "Manage your DAOs treasury by setting up streaming services for different purposes",
    img: manage,
    imgStyles: { marginTop: "-20px", zIndex: 0 },
  },
];

const HomeBody = () => {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSent, setIsSent] = React.useState(false);
  const handleChange = (event: any) => setEmail(event.target.value);

  const { account } = useWeb3React();

  const emailValidation = (emailStr: string) => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(emailStr)) {
      setError("");
      return true;
    } else {
      setError("Enter a valid email address");
      return false;
    }
  };

  const handleSubmitEmail = () => {
    if (!account) {
      setError("Connect Your Metamask First");
      return;
    }
    setError("");
    console.log(email);
    if (emailValidation(email)) {
      setIsLoading(true);
      // Do send to API
      const finalObj = {
        account: account,
        email: email,
      };
      console.log(finalObj);
      setTimeout(() => {
        setIsLoading(false);
        setIsSent(true);
      }, 3000);
    }
  };

  const gridWidth = useBreakpointValue({
    base: "repeat(1, 1fr)",
    sm: "repeat(2, 1fr)",
    md: "repeat(3, 1fr)",
    lg: "repeat(4, 1fr)",
  });

  const subTitleFontSize = useBreakpointValue({ base: "18px", md: "24px" });

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
          fontSize={subTitleFontSize}
          mt={"20px"}
          px={useBreakpointValue({ base: "20px", md: "100px" })}
        >
          Subtitle Here...
        </Text>
        <Box my={useBreakpointValue({ base: "50px", lg: "70px" })} px={"10px"}>
          {isSent ? (
            <Text
              textAlign={"center"}
              fontSize={subTitleFontSize}
              color={"brand.700"}
            >
              Your will hear from us shortly. Check your email.
            </Text>
          ) : (
            <FormControl isInvalid={error.length !== 0}>
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
                  {isLoading ? (
                    <CircularProgress
                      isIndeterminate
                      color="brand.700"
                      size={"34px"}
                      thickness={16}
                    />
                  ) : (
                    <Button
                      bg={"brand.700"}
                      color={"white"}
                      border={"1px"}
                      borderRadius={"50px"}
                      minH={"30px"}
                      py={{ base: 2 }}
                      px={{ base: 4 }}
                      fontWeight={"normal"}
                      _hover={{
                        color: "brand.700",
                        bg: "white",
                        borderColor: "brand.700",
                      }}
                      onClick={handleSubmitEmail}
                    >
                      Sign Up
                    </Button>
                  )}
                </InputRightElement>
              </InputGroup>
              {error && <FormErrorMessage>{error}</FormErrorMessage>}
            </FormControl>
          )}
        </Box>
      </Flex>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Box p={5} maxWidth={"8xl"}>
          <Grid templateColumns={gridWidth} gap={6}>
            {services.map((service, index) => {
              return (
                <GridItem w="100%" key={index}>
                  <FeatureCard
                    heading={service.heading}
                    img={service.img}
                    subText={service.subText}
                    imgStyles={service.imgStyles}
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
