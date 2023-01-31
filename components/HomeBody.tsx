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
import Hero from "./homeComponents/Hero";
import SectionCards from "./homeComponents/SectionCards";

const HomeBody = () => {
  return (
    <Box w={"100%"}>
      <Hero />
      <SectionCards />
    </Box>  
  );
};

export default HomeBody;
