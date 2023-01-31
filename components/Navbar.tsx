import React from "react";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
} from "@chakra-ui/icons";
import Image from "next/image";

import logo from "../public/logo.png";

export default function Navbar() {
  return (
    <Box w={"100%"}>
      <Box maxWidth={"1920px"} margin={"auto"}>
        <Flex
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          px={{ base: "20px", md: "30px" }}
          py={{ base: "10px", md: "20px" }}
        >
          <Box>
            <Flex>
              <Image
                src={logo}
                width={40}
                height={40}
                alt={"grassroot_logo"}
              ></Image>
              <Text fontWeight={500} fontSize={"20px"} mt={"3px"}>
                Grassroot
              </Text>
            </Flex>
          </Box>
          <Box>
            <Link
              href="mailto:team@grassroot.uk"
              _hover={{ textDecoration: "none" }}
            >
              <Button
                color={"brand.800"}
                backgroundColor={"brand.300"}
                borderRadius={"20px"}
                _hover={{
                  background: "brand.800",
                  color: "brand.300",
                }}
              >
                Contact Us
              </Button>
            </Link>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
