import { Image, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import image from "../assets/illustration-empty.svg";

const HomeNoInvoices = () => {
  const headerColor = useColorModeValue("black.600", "white");
  const textColor = useColorModeValue("gray.800", "gray.600");
  return (
    <VStack width="15rem" align="center" gap="1rem" marginTop="5rem">
      <Image src={image} />
      <Text className="hm" align="center" color={headerColor}>
        There is nothing here
      </Text>
      <Text width="13rem" className="body" color={textColor} align="center">
        Create a new invoice by clicking the <strong>New Invoice</strong> button
        and get started
      </Text>
    </VStack>
  );
};

export default HomeNoInvoices;
