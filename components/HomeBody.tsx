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

const HomeBody = () => {
  return (
    <Box w={"100%"}>
      <Hero />
    </Box>  
  );
};

export default HomeBody;
