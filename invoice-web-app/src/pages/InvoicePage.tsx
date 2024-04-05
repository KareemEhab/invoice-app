import { HStack, Show, VStack, useColorModeValue } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Invoice } from "../hooks/useInvoice";
import InvoiceStatusControl from "../components/InvoiceStatusControl";
import InvoiceDetails from "../components/InvoiceDetails";
import GoBackBtn from "../components/common/GoBackBtn";
import Button2 from "../components/common/Button2";
import Button3 from "../components/common/Button3";
import Button5 from "../components/common/Button5";

interface Props {
  invoices: Invoice[];
  setInvoiceToEdit: (invoice: Invoice) => void;
  onOpenEditForm: () => void;
}

const InvoicePage = ({ invoices, setInvoiceToEdit, onOpenEditForm }: Props) => {
  const params = useParams();
  const { invoiceID } = params;
  const invoice: Invoice | undefined = invoices.find(
    (invoice) => invoice.id === invoiceID
  );

  const bgColor = useColorModeValue("white", "black.500");

  if (!invoice) return "Not found";
  return (
    <VStack
      width="100%"
      minH="100vh"
      maxH="100vh"
      overflow="auto"
      paddingTop={{ base: "2rem", md: "5rem" }}
      paddingBottom={{ md: "3rem" }}
      justify="space-between"
    >
      <VStack width="45.6rem" maxW="80vw" gap="1.5rem" align="left">
        <GoBackBtn />
        <InvoiceStatusControl
          invoice={invoice}
          setInvoiceToEdit={setInvoiceToEdit}
          onOpenEditForm={onOpenEditForm}
        />
        <InvoiceDetails invoice={invoice} />
      </VStack>
      <Show below="sm">
        <HStack
          width="100%"
          justify="center"
          bg={bgColor}
          paddingY="1rem"
          marginTop="1rem"
        >
          <Button3 onClick={() => {}}>Edit</Button3>
          <Button5 onClick={() => {}}>Delete</Button5>
          <Button2 onClick={() => {}}>Mark as Paid</Button2>
        </HStack>
      </Show>
    </VStack>
  );
};

export default InvoicePage;
