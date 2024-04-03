import { HStack, VStack, Text, useColorModeValue } from "@chakra-ui/react";
import { Invoice } from "../hooks/useInvoice";

interface Props {
  invoice: Invoice;
}

const InvoiceDetailsSender = ({ invoice }: Props) => {
  const headerColor = useColorModeValue("black.600", "white");
  const textColor = useColorModeValue("gray.800", "gray.600");

  return (
    <HStack
      width="100%"
      justify="space-between"
      align="flex-start"
      flexDir={{ base: "column", md: "row" }}
    >
      <VStack align="left">
        <Text className="hs" color={headerColor}>
          #{invoice.id}
        </Text>
        <Text className="body" color={textColor}>
          {invoice.description}
        </Text>
      </VStack>
      <VStack align={{ md: "flex-end" }} className="body" textColor={textColor}>
        <Text>{invoice.senderAddress.street}</Text>
        <Text>{invoice.senderAddress.city}</Text>
        <Text>{invoice.senderAddress.postCode}</Text>
        <Text>{invoice.senderAddress.country}</Text>
      </VStack>
    </HStack>
  );
};

export default InvoiceDetailsSender;
