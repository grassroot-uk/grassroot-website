import {
  Button,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import { UserRejectedRequestError } from "@web3-react/injected-connector";
import { useEffect, useState } from "react";
import { injected } from "../connectors";
import useENSName from "../hooks/useENSName";
import useMetaMaskOnboarding from "../hooks/useMetaMaskOnboarding";
import { formatEtherscanLink, shortenHex } from "../util";
import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

type AccountProps = {
  triedToEagerConnect: boolean;
};

const Account = ({ triedToEagerConnect }: AccountProps) => {
  const { active, error, activate, chainId, account, setError } =
    useWeb3React();

  const {
    isMetaMaskInstalled,
    isWeb3Available,
    startOnboarding,
    stopOnboarding,
  } = useMetaMaskOnboarding();

  // manage connecting state for injected connector
  const [connecting, setConnecting] = useState(false);
  useEffect(() => {
    if (active || error) {
      setConnecting(false);
      stopOnboarding();
    }
  }, [active, error, stopOnboarding]);

  const ENSName = useENSName(account || "");

  if (error) {
    return null;
  }

  if (!triedToEagerConnect) {
    return null;
  }

  if (typeof account !== "string") {
    return (
      <div className="flex items-center">
        {isWeb3Available ? (
          <Button
            disabled={connecting}
            onClick={() => {
              setConnecting(true);

              activate(injected, undefined, true).catch((error) => {
                // ignore the error if it's a user rejected request
                if (error instanceof UserRejectedRequestError) {
                  setConnecting(false);
                } else {
                  setError(error);
                }
              });
            }}
            bg={"white"}
            color={"brand.700"}
            border={"1px"}
            borderRadius={"50px"}
            borderColor={"brand.700"}
            minH={"30px"}
            py={{ base: 2 }}
            px={{ base: 4 }}
            _hover={{
              bg: "brand.700",
              color: "white",
            }}
          >
            {isMetaMaskInstalled ? "Connect Metamask" : "Connect to Wallet"}
          </Button>
        ) : (
          <Button
            bg={"brand.700"}
            color={"white"}
            minH={"30px"}
            px={{ base: 4 }}
            _hover={{
              bg: "brand.900",
            }}
            onClick={startOnboarding}
          >
            Install Metamask
          </Button>
        )}
      </div>
    );
  }

  return (
    <Link
      href={formatEtherscanLink("Account", [chainId || 1, account])}
      target={"_blank"}
      minW={"auto"}
      rel={"noopener noreferrer"}
      color={"brand.700"}
    >
      {ENSName || `${shortenHex(account, 4)}`} <ExternalLinkIcon />
    </Link>
  );
};

export default Account;
