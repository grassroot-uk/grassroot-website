import {
  Box,
  ButtonGroup,
  Container,
  IconButton,
  Link,
  List,
  ListItem,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  useToken,
} from "@chakra-ui/react";
import * as React from "react";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { GiHighGrass } from "react-icons/gi";

const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
    mt={{ base: "4", md: "6" }}
    py={{ base: "6", md: "8" }}
    px={{ base: "6", md: "8" }}
  >
    <Stack
      justify="space-between"
      direction={{ base: "column", md: "row" }}
      align="center"
    >
      <List
        flexDirection={{ base: "column", md: "row" }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <ListItem p={"5px"} as={"a"}>
          About us
        </ListItem>
        <ListItem p={"5px"} as={"a"}>
          Features{" "}
        </ListItem>
        <ListItem p={"5px"} as={"a"}>
          Pricing{" "}
        </ListItem>
        <ListItem p={"5px"} as={"a"}>
          Resources
        </ListItem>
      </List>
      <ButtonGroup variant="ghost">
        <IconButton
          as="a"
          rel="noopener noreferrer"
          href="#"
          aria-label="Facebook"
          icon={<FaFacebook fontSize="1.25rem" />}
        />
        <IconButton
          as="a"
          rel="noopener noreferrer"
          href="#"
          aria-label="Twitter"
          icon={<FaTwitter fontSize="1.25rem" />}
        />
        <IconButton
          as="a"
          target={"_blank"}
          rel="noopener noreferrer"
          href="https://github.com/orgs/grassroot-uk/dashboard"
          aria-label="GitHub"
          icon={<FaGithub fontSize="1.25rem" />}
        />
        <IconButton
          as="a"
          href="mailto:team@grassroot.uk"
          aria-label="Email"
          icon={
            <GiHighGrass
              color={useToken("colors", ["brand.300"])[0]}
              fontSize="1.25rem"
            />
          }
        />
      </ButtonGroup>
    </Stack>
    <Stack>
      <Text fontSize="sm" color="subtle" textAlign={"center"}>
        &copy; {new Date().getFullYear()} Grassroot Inc. All rights reserved.
      </Text>
    </Stack>
  </Box>
);

export default Footer;
