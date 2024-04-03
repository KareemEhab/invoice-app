import { HStack, Show, Text, useColorModeValue } from "@chakra-ui/react";
import { Invoice } from "../hooks/useInvoice";
import InvoiceStatus from "./InvoiceStatus";
import Button3 from "./common/Button3";
import Button5 from "./common/Button5";
import Button2 from "./common/Button2";

interface Props {
  invoice: Invoice;
}

const InvoiceStatusControl = ({ invoice }: Props) => {
  const bgColor = useColorModeValue("white", "black.500");
  const textColor = useColorModeValue("gray.800", "gray.600");

  return (
    <HStack
      width="100%"
      height="5.5rem"
      bg={bgColor}
      borderRadius="0.5rem"
      paddingX="2rem"
      justify="space-between"
    >
      <HStack
        width={{ base: "100%", md: "fit-content" }}
        justify="space-between"
        gap="1rem"
      >
        <Text className="body" color={textColor}>
          Status
        </Text>
        <InvoiceStatus invoice={invoice} />
      </HStack>
      <Show above="md">
        <HStack>
          <Button3 onClick={() => {}}>Edit</Button3>
          <Button5 onClick={() => {}}>Delete</Button5>
          <Button2 onClick={() => {}}>Mark as Paid</Button2>
        </HStack>
      </Show>
    </HStack>
  );
};

export default InvoiceStatusControl;
