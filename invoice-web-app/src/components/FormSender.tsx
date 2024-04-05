import { VStack, SimpleGrid, Text } from "@chakra-ui/react";
import FormField from "./common/FormField";

const FormSender = () => {
  return (
    <VStack width="100%" align="left" gap="1rem">
      <Text className="hs" color="purple.800">
        Bill From
      </Text>
      <FormField width="100%" label="Street Address" name="streetAddressFrom" />
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        justifyContent="space-between"
        width="100%"
        spacingX="2rem"
        spacingY="1rem"
        alignItems="center"
      >
        <FormField width="100%" label="City" name="cityFrom" />
        <FormField width="100%" label="Post Code" name="postCodeFrom" />
        <FormField width="100%" label="Country" name="countryFrom" />
      </SimpleGrid>
    </VStack>
  );
};

export default FormSender;
