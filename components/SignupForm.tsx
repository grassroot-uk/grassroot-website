import {
  FormControl,
  InputGroup,
  Input,
  InputRightElement,
  CircularProgress,
  Button,
  FormErrorMessage,
  Text,
  Flex,
  Box,
} from "@chakra-ui/react";
import React from "react";
import useFontSize from "../hooks/useFontSize";

const SignupForm = () => {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSent, setIsSent] = React.useState(false);

  const emailValidation = (emailStr: string) => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(emailStr)) {
      setError("");
      return true;
    } else {
      setError("Enter a valid email address");
      return false;
    }
  };

  const handleSubmitEmail = async () => {
    setError("");
    console.log(email);
    if (emailValidation(email)) {
      setIsLoading(true);
      // Do send to API
      const data = {
        email: email,
      };
      console.log(data);

      const response = await fetch("/api/sendmail", {
        method: "POST",
        body: JSON.stringify(data),
      });

      const res = await response.json();

      if (res.error) {
        setError(res.error);
      } else {
        setIsSent(true);
      }
      setIsLoading(false);
    }
  };

  const { subTitleFontSize } = useFontSize();

  return isSent ? (
    <Text textAlign={"center"} fontSize={subTitleFontSize} color={"white"}>
      Thankyou for signing up. We will keep you updated about grassroot.
    </Text>
  ) : (
    <FormControl isInvalid={error.length !== 0} w={"auto"}>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        maxW={"600px"}
        direction={{ base: "column", md: "row" }}
      >
        <Box mr={"5px"}>
          <Input
            borderRadius={"50px"}
            type={"email"}
            width={"auto"}
            backgroundColor={"white"}
            placeholder="Your email.."
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {error && (
            <FormErrorMessage textAlign={"center"}>{error}</FormErrorMessage>
          )}
        </Box>
        <Button
          bg={"brand.300"}
          color={"brand.800"}
          border={"1px"}
          borderRadius={"50px"}
          minH={"30px"}
          maxW={"200px"}
          mt={{ base: "10px", md: "0px" }}
          py={{ base: 2 }}
          px={{ base: "10px" }}
          fontWeight={"bold"}
          _hover={{
            color: "brand.300",
            bg: "brand.800",
            borderColor: "brand.300",
          }}
          onClick={handleSubmitEmail}
        >
          {isLoading ? (
            <CircularProgress
              isIndeterminate
              color="brand.800"
              size={"34px"}
              thickness={16}
            />
          ) : (
            "Join the waitlist"
          )}
        </Button>
      </Flex>
    </FormControl>
  );
};

export default SignupForm;
