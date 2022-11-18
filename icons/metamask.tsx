import { Icon } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

import metamask from "../public/metamask-icon.svg";

const MetamaskIcon = (_props: any) => {
  console.log(metamask);
  return (
    <Image src={metamask} alt="metamask" width={20} height={20} {..._props} />
  );
};

export default MetamaskIcon;
