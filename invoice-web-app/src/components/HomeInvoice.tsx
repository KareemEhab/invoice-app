import {
  HStack,
  Image,
  Show,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Invoice } from "../hooks/useInvoice";
import arrow from "../assets/icon-arrow-right.svg";
import { FaCircle } from "react-icons/fa";

interface Props {
  invoice: Invoice;
}

const HomeInvoice = ({ invoice }: Props) => {
  const bgColor = useColorModeValue("white", "black.500");
  const textColor = useColorModeValue("black.600", "white");
  const dueColor = useColorModeValue("gray.800", "gray.600");
  const dateColor = useColorModeValue("purple.700", "gray.600");
  const clientNameColor = useColorModeValue("gray.900", "white");
  const { colorMode } = useColorMode();

  return (
    <HStack
      width="100%"
      height={{ base: "8.375rem", md: "4.5rem" }}
      justify="space-between"
      bg={bgColor}
      borderRadius="0.5rem"
      paddingX={{ base: "1rem", md: "2rem" }}
      paddingY={{ base: "1rem", md: "0" }}
      cursor="pointer"
      _hover={{
        borderWidth: "1px",
        borderColor: "purple.800",
        paddingX: "calc(2rem - 1px)",
      }}
      flexDir={{ base: "column", md: "row" }}
    >
      <HStack
        width={{ base: "100%", md: "fit-content" }}
        gap={{ base: "1rem", lg: "3rem" }}
        justify="space-between"
      >
        <HStack
          gap={{ base: "1rem", lg: "3rem" }}
          flexDir={{ base: "column", md: "row" }}
          align="left"
        >
          <HStack className="hs" gap={0}>
            <Text color="purple.700">#</Text>
            <Text color={textColor}>{invoice.id}</Text>
          </HStack>
          <HStack className="bodyv" gap={1}>
            <Text color={dueColor}>Due</Text>
            <Text color={dateColor}>{invoice.paymentDue}</Text>
          </HStack>
        </HStack>
        <Text className="bodyv" color={clientNameColor} ml="1rem">
          {invoice.clientName}
        </Text>
      </HStack>
      <HStack width={{ base: "100%", md: "fit-content" }}>
        <HStack
          gap="3rem"
          justify="space-between"
          width={{ base: "100%", md: "fit-content" }}
        >
          <Text className="hs" color={textColor}>
            £ {invoice.total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </Text>
          <HStack
            width="6.5rem"
            height="2.5rem"
            justify="center"
            bg={`statusbg.${invoice.status}.${colorMode}`}
            borderRadius="0.5rem"
          >
            <HStack textColor={`status.${invoice.status}.${colorMode}`}>
              <FaCircle fontSize="0.5rem" />
              <Text
                className="hs"
                color={`status.${invoice.status}.${colorMode}`}
              >
                {invoice.status.charAt(0).toUpperCase() +
                  invoice.status.slice(1)}
              </Text>
            </HStack>
          </HStack>
        </HStack>
        <Show above="md">
          <Image src={arrow} cursor="pointer" />
        </Show>
      </HStack>
    </HStack>
  );
};

export default HomeInvoice;
