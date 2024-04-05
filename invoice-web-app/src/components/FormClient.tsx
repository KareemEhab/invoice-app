import { VStack, SimpleGrid, Text } from "@chakra-ui/react";
import FormField from "./common/FormField";

const FormClient = () => {
  return (
    <VStack width="100%" align="left" gap="1rem">
      <Text className="hs" color="purple.800">
        Bill To
      </Text>
      <FormField width="100%" label="Client’s Name" name="clientName" />
      <FormField
        width="100%"
        label="Client’s Email"
        placeholder="e.g. email@example.com"
        name="clientEmail"
      />
      <FormField width="100%" label="Street Address" name="clientAddress" />
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        justifyContent="space-between"
        width="100%"
        spacingX="2rem"
        spacingY="1rem"
        alignItems="center"
      >
        <FormField width="100%" label="City" name="clientCity" />
        <FormField width="100%" label="Post Code" name="clientPostCode" />
        <FormField width="100%" label="Country" name="clientCountry" />
      </SimpleGrid>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        justifyContent="space-between"
        width="100%"
        spacingX="2rem"
        spacingY="1rem"
        alignItems="center"
      >
        <FormField
          width="100%"
          label="Invoice Date"
          name="invoiceDate"
          type="date"
        />
        <FormField width="100%" label="Payment Terms" name="paymentTerms" />
      </SimpleGrid>
      <VStack width="100%">
        <FormField
          width="100%"
          label="Project Description"
          name="projectDescription"
        />
      </VStack>
    </VStack>
  );
};

export default FormClient;
