import {
  Box,
  Card,
  CardBody,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export type IFeatureCard = {
  heading: string;
  description: string;
  top: string;
  image: any;
  imgStyles?: any;
};

const FeatureCard: React.FC<IFeatureCard> = ({
  heading,
  description,
  top,
  image,
  imgStyles,
}) => {
  return (
    <Card
      minH={"300px"}
      overflow={"hidden"}
      bg={"white"}
      p={"15px"}
      border={"1px solid"}
      borderColor={"rgba(0,0,0,0.1)"}
      boxShadow={"2px 2px 4px 0 rgb(0 0 0 / 25%)"}
    >
      <Text color={"gray.600"}>{top}</Text>
      <Box
        mb={useBreakpointValue({
          base: "10px",
          md: "15px",
          lg: "18px",
        })}
        display={"flex"}
        alignItems={"center"}
        my={{ base: "10px", md: "30px" }}
      >
        <Image
          src={image}
          alt={heading}
          style={{ maxHeight: "50px", maxWidth: "50px" }}
        />
        <Heading
          ml={"15px"}
          fontSize={useBreakpointValue({ base: "xl", md: "3xl" })}
          fontWeight={"semibold"}
          color={"gray.700"}
        >
          {heading}
        </Heading>
      </Box>
      <Text
        color={"gray.700"}
        fontSize={useBreakpointValue({ base: "10px", md: "14px" })}
        lineHeight={useBreakpointValue({ base: "15px", md: "20px" })}
      >
        {description}
      </Text>
    </Card>
  );
};

export default FeatureCard;
