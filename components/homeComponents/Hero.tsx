import {
  Box,
  Heading,
  Tag,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import useFontSize from "../../hooks/useFontSize";
import SignupForm from "../SignupForm";
import Image from "next/image";

import UIImage from "../../public/grassroot_ui.png";
import lines_bg from "../../public/lines_hero_bg.png";

const Hero = () => {
  const { titleFontSize, subTitleFontSize } = useFontSize();

  const height = useBreakpointValue({
    base: 400,
    sm: 500,
    md: 600,
    lg: 700,
    xl: 800,
  });

  const imagePad = useBreakpointValue({
    base: 0,
    sm: 0,
    md: 20,
    lg: 100,
  });

  const bottomPad = useBreakpointValue({
    base: -100,
    sm: 0,
    md: 0,
    lg: 0,
  });
  return (
    <Box
      w={"100%"}
      backgroundColor={"brand.800"}
      backgroundImage={"./lines_hero_bg.png"}
      backgroundSize={{ base: "contain", lg: "cover" }}
      backgroundRepeat={"no-repeat"}
      backgroundBlendMode={"soft-light"}
      mb={`${((height || 0) / 2)+(bottomPad || 0)}px`}
    >
      <Box>
        <Box
          margin={"auto"}
          position={"relative"}
          maxWidth={"1280px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <VStack
            w={"100%"}
            pt={{ base: "30px", md: "50px" }}
            pb={`${(height || 0) / 2 + (imagePad || 0)}px`}
            justifyContent={"center"}
            alignItems={"center"}
            px={"20px"}
          >
            <Tag borderRadius={"20px"}>Launching MVP Soon</Tag>
            <Heading
              color={"white"}
              fontSize={titleFontSize}
              textAlign={"center"}
              maxW={"1000px"}
              wordBreak={"break-word"}
              pt={"30px"}
            >
              The{" "}
              <Box
                as={"span"}
                display={"inline"}
                color={"brand.300"}
                wordBreak={"break-word"}
              >
                one-stop shop solution{" "}
              </Box>{" "}
              for all your DAO needs
            </Heading>
            <Text
              fontSize={subTitleFontSize}
              color={"white"}
              py={"20px"}
              textAlign={"center"}
            >
              The next generation of tooling services
            </Text>
            <SignupForm />
            <Box
              position={"absolute"}
              bottom={`-${((height || 0) / 2)+(bottomPad || 0)}px`}
              left={"0px"}
              w={"100%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              padding={"10px"}
            >
              <Box backgroundColor={"#ddf3ea"} borderRadius={"20px"} overflow={"hidden"}>
                <Image
                  src={UIImage}
                  height={height}
                  // @ts-ignore
                  width={"100%"}
                  alt={"grassroot_gui"}
                />
              </Box>
            </Box>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
