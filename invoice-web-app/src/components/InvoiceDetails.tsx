import { VStack, useColorModeValue } from "@chakra-ui/react";
import { Invoice } from "../hooks/useInvoice";
import InvoiceDetailsSender from "./InvoiceDetailsSender";
import InvoiceDetailsClient from "./InvoiceDetailsClient";
import InvoiceDetailsItems from "./InvoiceDetailsItems";

interface Props {
  invoice: Invoice;
}

const InvoiceDetails = ({ invoice }: Props) => {
  const bgColor = useColorModeValue("white", "black.500");

  return (
    <VStack
      width="100%"
      bg={bgColor}
      borderRadius="0.5rem"
      paddingX="2rem"
      paddingY="2rem"
      align="left"
      gap={{ base: "3rem", md: "1rem" }}
    >
      <InvoiceDetailsSender invoice={invoice} />
      <InvoiceDetailsClient invoice={invoice} />
      <InvoiceDetailsItems invoice={invoice} />
    </VStack>
  );
};

export default InvoiceDetails;
