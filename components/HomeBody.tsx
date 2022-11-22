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
  InputRightElement,
  Input,
  InputGroup,
  FormErrorMessage,
  FormControl,
  CircularProgress,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import register from "../public/register.webp";
import fundraise from "../public/fundraise.webp";
import manage from "../public/manage.webp";
import communicate from "../public/communicate.webp";
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
    heading: "Treasury Management",
    subText: "Manage your DAO’s treasury by setting up streaming services",
    img: manage,
    imgStyles: { marginTop: "-20px", zIndex: 0 },
  },
];

const HomeBody = () => {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSent, setIsSent] = React.useState(false);

  const [metamaskOptional, setMetamaskOptional] = React.useState(false);

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

  const handleSubmitEmail = async () => {
    if (!account && !metamaskOptional) {
      onOpen();
      return;
    }
    setError("");
    console.log(email);
    if (emailValidation(email)) {
      setIsLoading(true);
      // Do send to API
      const data = {
        account: account,
        email: email,
      };
      console.log(data);

      const response = await fetch("/api/sendmail", {
        method: "POST",
        body: JSON.stringify(data),
      });

      const res = await response.json();

      if (res.error) {
        setError(res.error);
      } else {
        setIsSent(true);
      }
      setIsLoading(false);
    }
  };

  const gridWidth = useBreakpointValue({
    base: "repeat(1, 1fr)",
    sm: "repeat(2, 1fr)",
    md: "repeat(3, 1fr)",
    lg: "repeat(4, 1fr)",
  });

  const subTitleFontSize = useBreakpointValue({ base: "18px", md: "24px" });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  return (
    <Box>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Are you sure?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Looks like you haven&apos;t logged in via your metamask account.
              Metamask users will get exclusive access ot new features and alpha
              releases for grassroot.
            </Text>
            <Text mt={"1rem"} fontSize={"sm"} color={"subtle"}>
              Totally Optional, You can skip.
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="red"
              mr={3}
              onClick={() => {
                setMetamaskOptional(true);
                onClose();
              }}
            >
              Continue without account.
            </Button>
            <Button
              backgroundColor={"brand.700"}
              color={"white"}
              _hover={{
                backgroundColor: "white",
                border: "1px",
                borderColor: "brand.700",
                color: "brand.700",
              }}
              onClick={onClose}
            >
              Sure, Count me In.
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
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
          The next generation of tooling services
        </Text>
        <Box my={useBreakpointValue({ base: "50px", lg: "70px" })} px={"10px"}>
          {isSent ? (
            <Text
              textAlign={"center"}
              fontSize={subTitleFontSize}
              color={"brand.700"}
            >
              Thankyou for signing up. We will keep you updated about grassroot.
            </Text>
          ) : (
            <FormControl isInvalid={error.length !== 0}>
              <InputGroup size="lg">
                <Input
                  pr="7rem"
                  ref={finalRef}
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
