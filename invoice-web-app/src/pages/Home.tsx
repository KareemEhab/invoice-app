import { VStack } from "@chakra-ui/react";
import { Invoice } from "../hooks/useInvoice";
import HomeInvoice from "../components/HomeInvoice";
import HomeHeader from "../components/HomeHeader";
import { useState } from "react";

interface Props {
  invoices: Invoice[];
}

const Home = ({ invoices }: Props) => {
  const [selectedStatuses, setSelectedStatuses] = useState([
    "draft",
    "pending",
    "paid",
  ]);
  const filteredInvoices = invoices.filter((invoice) =>
    selectedStatuses.includes(invoice.status)
  );

  return (
    <VStack width="100%" minH="100vh" maxH="100vh" overflow="auto">
      <VStack width="45.6rem" maxW="80%" paddingTop="6rem" gap="4rem">
        <HomeHeader
          invoices={filteredInvoices}
          setSelectedStatuses={setSelectedStatuses}
        />
        <VStack width="100%" gap="1rem">
          {filteredInvoices.map((invoice) => (
            <HomeInvoice key={invoice.id} invoice={invoice} />
          ))}
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Home;
