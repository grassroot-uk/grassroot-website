import { Button, useColorModeValue } from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import { UserRejectedRequestError } from "@web3-react/injected-connector";
import { useEffect, useState } from "react";
import { injected } from "../connectors";
import useENSName from "../hooks/useENSName";
import useMetaMaskOnboarding from "../hooks/useMetaMaskOnboarding";
import { formatEtherscanLink, shortenHex } from "../util";

import MetamaskIcon from "../icons/metamask";

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
            bg={useColorModeValue("brand.700", "brand.600")}
            color={useColorModeValue("white", "white")}
            minH={"30px"}
            py={{ base: 2 }}
            px={{ base: 4 }}
            _hover={{
              bg: useColorModeValue("brand.900", "brand.500"),
            }}
          >
            {isMetaMaskInstalled ? "Connect Metamask" : "Connect to Wallet"}
          </Button>
        ) : (
          <Button
            bg={useColorModeValue("brand.700", "brand.600")}
            color={useColorModeValue("white", "white")}
            minH={"30px"}
            px={{ base: 4 }}
            _hover={{
              bg: useColorModeValue("brand.900", "brand.500"),
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
    <a
      {...{
        href: formatEtherscanLink("Account", [chainId || 1, account]),
        target: "_blank",
        rel: "noopener noreferrer",
      }}
      className="flex items-center py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    >
      {ENSName || `${shortenHex(account, 4)}`}
    </a>
  );
};

export default Account;
