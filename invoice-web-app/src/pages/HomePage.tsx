import { VStack } from "@chakra-ui/react";
import { Invoice } from "../hooks/useInvoice";
import HomeInvoice from "../components/HomeInvoice";
import HomeHeader from "../components/HomeHeader";
import { useState } from "react";
import HomeNoInvoices from "../components/HomeNoInvoices";

interface Props {
  invoices: Invoice[];
}

const HomePage = ({ invoices }: Props) => {
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
      <VStack
        width="45.6rem"
        maxW="80vw"
        paddingTop={{ base: "2rem", lg: "6rem" }}
        gap="4rem"
      >
        <HomeHeader
          invoices={filteredInvoices}
          setSelectedStatuses={setSelectedStatuses}
        />
        {filteredInvoices.length > 0 ? (
          <VStack width="100%" gap="1rem">
            {filteredInvoices.map((invoice) => (
              <HomeInvoice key={invoice.id} invoice={invoice} />
            ))}
          </VStack>
        ) : (
          <HomeNoInvoices />
        )}
      </VStack>
    </VStack>
  );
};

export default HomePage;
