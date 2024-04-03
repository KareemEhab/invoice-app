import {
  HStack,
  Text,
  VStack,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
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

  const buttonText = useBreakpointValue({ base: "New", md: "New Invoice" });
  const headerClass = useBreakpointValue({ base: "hm", md: "hl" });
  const totalInvoicesText = useBreakpointValue({
    base: `${invoices.length} invoices`,
    md: `There are ${invoices.length} total invoices`,
  });

  return (
    <HStack
      width="100%"
      height="3.5rem"
      justify="space-between"
      marginTop={{ base: "2rem", lg: "6rem" }}
    >
      <VStack align="left">
        <Text className={headerClass} color={headerColor}>
          Invoices
        </Text>
        <Text className="body" color={subheaderColor}>
          {invoices.length > 0 ? totalInvoicesText : "No invoices"}
        </Text>
      </VStack>
      <HStack gap="2rem">
        <HomeHeaderMenu setSelectedStatuses={setSelectedStatuses} />
        <Button1 onClick={() => {}}>{buttonText}</Button1>
      </HStack>
    </HStack>
  );
};

export default HomeHeader;
