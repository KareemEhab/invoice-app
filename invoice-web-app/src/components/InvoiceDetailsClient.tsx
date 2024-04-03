import { HStack, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { Invoice } from "../hooks/useInvoice";

interface Props {
  invoice: Invoice;
}

const InvoiceDetailsClient = ({ invoice }: Props) => {
  const headerColor = useColorModeValue("black.600", "white");
  const textColor = useColorModeValue("gray.800", "gray.600");

  return (
    <HStack
      maxW="100%"
      align="flex-start"
      gap={{ base: "5rem", md: "8rem" }}
      wrap="wrap"
    >
      <VStack height="100%" justify="space-between" align="flex-start">
        <VStack gap="1rem" align="flex-start">
          <Text className="body" color={textColor}>
            Invoice Date
          </Text>
          <Text className="hs" color={headerColor}>
            {invoice.createdAt}
          </Text>
        </VStack>
        <VStack gap="1rem" align="flex-start">
          <Text className="body" color={textColor}>
            Payment Due
          </Text>
          <Text className="hs" color={headerColor}>
            {invoice.paymentDue}
          </Text>
        </VStack>
      </VStack>
      <VStack align="flex-start">
        <Text className="body" color={textColor}>
          Bill To
        </Text>
        <VStack align="flex-start">
          <Text className="hs" color={headerColor}>
            {invoice.clientName}
          </Text>
          <VStack align="flex-start" className="body" textColor={textColor}>
            <Text>{invoice.clientAddress.street}</Text>
            <Text>{invoice.clientAddress.city}</Text>
            <Text>{invoice.clientAddress.postCode}</Text>
            <Text>{invoice.clientAddress.country}</Text>
          </VStack>
        </VStack>
      </VStack>
      <VStack align="flex-start" height="fit-content">
        <Text className="body" color={textColor}>
          Sent To
        </Text>
        <Text className="hs" color={headerColor}>
          {invoice.clientEmail}
        </Text>
      </VStack>
    </HStack>
  );
};

export default InvoiceDetailsClient;
