import {
  useColorModeValue,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  HStack,
  Text,
  Show,
  VStack,
} from "@chakra-ui/react";
import { Invoice } from "../hooks/useInvoice";

interface Props {
  invoice: Invoice;
}

const InvoiceDetailsItems = ({ invoice }: Props) => {
  const bgColor = useColorModeValue("white.700", "black.400");
  const headerColor = useColorModeValue("black.600", "white");
  const textColor = useColorModeValue("gray.800", "gray.600");

  return (
    <TableContainer
      width="100%"
      bg={bgColor}
      borderRadius="0.5rem"
      paddingTop="1rem"
    >
      <Table width="100%" variant="unstyled">
        <Show above="md">
          <Thead>
            <Tr className="body" color={textColor}>
              <Th textTransform="none">Item Name</Th>
              <Th textAlign="center">QTY.</Th>
              <Th textTransform="none" textAlign="right">
                Price
              </Th>
              <Th textTransform="none" textAlign="right">
                Total
              </Th>
            </Tr>
          </Thead>
        </Show>
        <Tbody paddingBottom="1rem">
          {invoice.items.map((item) => (
            <>
              <Show above="md">
                <Tr className="hs" textColor={headerColor}>
                  <Td>{item.name}</Td>
                  <Td textAlign="center" textColor={textColor}>
                    {item.quantity}
                  </Td>
                  <Td textAlign="right" textColor={textColor}>
                    £{" "}
                    {item.price
                      .toFixed(2)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </Td>
                  <Td textAlign="right">
                    £{" "}
                    {item.total
                      .toFixed(2)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </Td>
                </Tr>
              </Show>
              <Show below="sm">
                <Tr
                  key={item.name + "1"}
                  className="hs"
                  textColor={headerColor}
                >
                  <Td>
                    <VStack align="left">
                      <Text>{item.name}</Text>
                      <Text textColor={textColor}>{`${
                        item.quantity
                      } x £ ${item.price
                        .toFixed(2)
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</Text>
                    </VStack>
                  </Td>
                  <Td textAlign="center">
                    £{" "}
                    {item.total
                      .toFixed(2)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </Td>
                </Tr>
              </Show>
            </>
          ))}
          <Tr style={{ height: "0.5rem" }}>
            <Td colSpan={4}></Td>
          </Tr>
        </Tbody>
        <Tfoot bg="black.600">
          <Tr>
            <Td colSpan={4}>
              <HStack width="100%" height="3rem" justify="space-between">
                <Text className="body" color="white">
                  Amount Due
                </Text>
                <Text className="hm" color="white">
                  £{" "}
                  {invoice.total
                    .toFixed(2)
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </Text>
              </HStack>
            </Td>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default InvoiceDetailsItems;
