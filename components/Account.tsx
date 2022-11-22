import {
  Button,
  useBreakpointValue,
  useColorModeValue,
  useMediaQuery,
  useToken,
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
import { GrInstallOption, GrConnectivity, GrConnect } from "react-icons/gr";
import { FaAddressCard } from "react-icons/fa";

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

  const [isLessThan370] = useMediaQuery("(max-width: 370px)", {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });

  const brandHexColor = useToken("colors", ["brand.700"])[0];

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
            {isMetaMaskInstalled ? (
              !isLessThan370 ? (
                "Connect Metamask"
              ) : (
                <GrConnectivity color={"white"} fontSize="1.25rem" />
              )
            ) : !isLessThan370 ? (
              "Connect to Wallet"
            ) : (
              <GrConnect color={brandHexColor} fontSize="1.25rem" />
            )}
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
            {isLessThan370 ? (
              <GrInstallOption color={brandHexColor} fontSize="1.25rem" />
            ) : (
              "Install Metamask"
            )}
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
      {isLessThan370 ? (
        <FaAddressCard color={brandHexColor} fontSize="1.25rem" />
      ) : (
        ENSName || shortenHex(account, 4)
      )}
    </Link>
  );
};

export default Account;
