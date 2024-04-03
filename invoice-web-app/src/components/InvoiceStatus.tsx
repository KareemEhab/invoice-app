import { HStack, useColorMode, Text } from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";
import { Invoice } from "../hooks/useInvoice";

interface Props {
  invoice: Invoice;
}

const InvoiceStatus = ({ invoice }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <HStack
      width="6.5rem"
      height="2.5rem"
      justify="center"
      bg={`statusbg.${invoice.status}.${colorMode}`}
      borderRadius="0.5rem"
    >
      <HStack textColor={`status.${invoice.status}.${colorMode}`}>
        <FaCircle fontSize="0.5rem" />
        <Text className="hs" color={`status.${invoice.status}.${colorMode}`}>
          {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
        </Text>
      </HStack>
    </HStack>
  );
};

export default InvoiceStatus;
