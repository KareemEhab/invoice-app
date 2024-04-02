import { HStack, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { Invoice } from "../hooks/useInvoice";
import Button1 from "./common/Button1";
import HomeHeaderMenu from "./HomeHeaderMenu";

interface Props {
  invoices: Invoice[];
  setSelectedStatuses: (newStatuses: string[]) => void;
}

const HomeHeader = ({ invoices, setSelectedStatuses }: Props) => {
  const headerColor = useColorModeValue("black.600", "white");
  const subheaderColor = useColorModeValue("gray.800", "gray.600");

  return (
    <HStack width="100%" height="3.5rem" justify="space-between">
      <VStack align="left">
        <Text className="hl" color={headerColor}>
          Invoices
        </Text>
        <Text className="body" color={subheaderColor}>
          There are {invoices.length} total invoices
        </Text>
      </VStack>
      <HStack gap="2rem">
        <HomeHeaderMenu setSelectedStatuses={setSelectedStatuses} />
        <Button1 onClick={() => {}}>New Invoice</Button1>
      </HStack>
    </HStack>
  );
};

export default HomeHeader;
