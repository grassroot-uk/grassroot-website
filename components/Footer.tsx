import {
  Box,
  ButtonGroup,
  Container,
  IconButton,
  Link,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  useToken,
} from "@chakra-ui/react";
import * as React from "react";
import { FaGithub } from "react-icons/fa";
import { GiHighGrass } from "react-icons/gi";
import GrassrootIcon from "../icons/grassroot";

const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
    borderTop={"1px"}
    borderColor="gray.100"
    mt={{ base: "4", md: "6" }}
    py={{ base: "6", md: "8" }}
    px={{ base: "6", md: "8" }}
  >
    <Stack spacing={{ base: "4", md: "5" }} justify="center" align={"center"}>
      <Stack justify="center" direction="row" align="center">
        <GrassrootIcon />
        <ButtonGroup variant="ghost">
          {/* <IconButton
            as="a"
            target={"_blank"}
            rel="noopener noreferrer"
            href="https://github.com/orgs/grassroot-uk/dashboard"
            aria-label="GitHub"
            icon={<FaGithub fontSize="1.25rem" />}
          /> */}
          <IconButton
            as="a"
            href="mailto:team@grassroot.uk"
            aria-label="Email"
            icon={
              <GiHighGrass
                color={useToken("colors", ["brand.700"])[0]}
                fontSize="1.25rem"
              />
            }
          />
        </ButtonGroup>
      </Stack>
      <Stack>
        <Text fontSize="sm" color="subtle" textAlign={"center"}>
          Contact us @{" "}
          <Link color={"brand.900"} href="mailto:team@grassroot.uk">
            team@grassroot.uk
          </Link>{" "}
          to know more.
        </Text>
        <Text fontSize="sm" color="subtle" textAlign={"center"}>
          &copy; {new Date().getFullYear()} Grassroot Inc. All rights reserved.
        </Text>
      </Stack>
    </Stack>
  </Box>
);

export default Footer;
