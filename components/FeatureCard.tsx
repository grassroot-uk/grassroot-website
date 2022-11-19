import {
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
  subText: string;
  img: any;
  imgStyles: any;
};

const FeatureCard: React.FC<IFeatureCard> = ({ heading, subText, img, imgStyles }) => {
  return (
    <Card h={"350px"} overflow={"hidden"} bg={"white"}>
      <CardBody zIndex={2}>
        <Heading
          textAlign={"center"}
          fontSize={useBreakpointValue({ base: "xl", md: "2xl" })}
          mb={useBreakpointValue({
            base: "10px",
            md: "15px",
            lg: "18px",
          })}
        >
          {heading}
        </Heading>
        <Text
          textAlign={"center"}
          fontSize={useBreakpointValue({ base: "14px", md: "18px" })}
          lineHeight={useBreakpointValue({ base: "19px", md: "24px" })}
        >
          {subText}
        </Text>
      </CardBody>
      <Image src={img} alt={heading} style={{...imgStyles}}/>
    </Card>
  );
};

export default FeatureCard;
