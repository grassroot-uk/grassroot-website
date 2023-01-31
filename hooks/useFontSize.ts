import { useBreakpointValue } from "@chakra-ui/react";
import React from "react";

const useFontSize = () => {
  const subTitleFontSize = useBreakpointValue({ base: "18px", md: "24px" });
  const titleFontSize = useBreakpointValue({
    base: "32px",
    md: "42px",
    lg: "56px",
    xl: "70px",
  });
  return {
    subTitleFontSize,
    titleFontSize
  };
};

export default useFontSize;
