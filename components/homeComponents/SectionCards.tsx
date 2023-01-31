import { Box, Heading, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import FeatureCard from "../FeatureCard";

import communicate from "../../public/icons/partners.png";
import store_document from "../../public/icons/group.png";
import on_chain_voting from "../../public/icons/care.png";
import crowdfunding from "../../public/icons/fundraising.png";
import social_feed from "../../public/icons/network.png";
import tresaury from "../../public/icons/government.png";

import cards_bg from "../../public/bg.webp";

const cardsData = [
  {
    top: "Communicate",
    heading: "Communicate with members",
    description:
      "Create roles for DAO members and interact with other members of the community in a trustless way.",
    image: communicate,
  },
  {
    top: "Store Documents",
    heading: "Save resources in one place",
    description:
      "Organise all the DAO's documents in one place, all committed to the blockchain and tamper proof to keep transparency at most.",
    image: store_document,
  },
  {
    top: "On-chain voting",
    heading: "Vote for proposals",
    description:
      "Create independent proposals for other DAO members to vote on, and to come to a natural consensus about the direction of the project.",
    image: on_chain_voting,
  },
  {
    top: "Decentralized crowdfunding",
    heading: "Community fundraising",
    description:
      "Raise money for your DAO in an open and transparent manner on the decentralized web3 of future.",
    image: crowdfunding,
  },
  {
    top: "Social Feed",
    heading: "Follow DAOs you like",
    description:
      "A customised social feed based on the DAOs you are following to keep up with the latest happenings.",
    image: social_feed,
  },
  {
    top: "Manage Treasury",
    heading: "Streamline payments",
    description:
      "Make payments from your DAO's treasury by adding a label to each transaction made.",
    image: tresaury,
  },
];

const SectionCards = () => {

    const cols = useBreakpointValue({
        base: "repeat(1, 1fr)",
        sm: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
        xl: "repeat(3, 1fr)",
    })

  return (
    <Box backgroundImage={"./bg.webp"} backgroundSize={"cover"}>
      <Box p={"10px"} maxWidth={"1280px"} margin={"auto"} pb={"30px"}>
        <Heading textAlign={"center"} my={{base: "50px", md: "90px"}}>
          Create a thriving DAO community <br />
          <Box as={"span"} color={"brand.600"}>
            you can be proud of
          </Box>
        </Heading>
        <Grid templateColumns={cols}  gap={"15px"}>
          {cardsData.map((card) => {
            return (
              <GridItem key={card.heading}>
                <FeatureCard
                  heading={card.heading}
                  description={card.description}
                  top={card.top}
                  image={card.image}
                />
              </GridItem>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default SectionCards;
