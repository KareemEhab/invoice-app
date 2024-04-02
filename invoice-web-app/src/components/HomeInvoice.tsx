import {
  HStack,
  Image,
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
      height="4.5rem"
      justify="space-between"
      bg={bgColor}
      borderRadius="0.5rem"
      paddingX="2rem"
    >
      <HStack gap="3rem">
        <HStack className="hs" gap={0}>
          <Text color="purple.700">#</Text>
          <Text color={textColor}>{invoice.id}</Text>
        </HStack>
        <HStack className="bodyv" gap={1}>
          <Text color={dueColor}>Due</Text>
          <Text color={dateColor}>{invoice.paymentDue}</Text>
        </HStack>
        <Text className="bodyv" color={clientNameColor} ml="1rem">
          {invoice.clientName}
        </Text>
      </HStack>
      <HStack>
        <HStack gap="3rem">
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
        <Image src={arrow} cursor="pointer" />
      </HStack>
    </HStack>
  );
};

export default HomeInvoice;
