import { VStack, HStack, Text, useColorModeValue } from "@chakra-ui/react";
import { FieldArray, useFormikContext } from "formik";
import FormField from "./common/FormField"; // Make sure the path is correct

interface FormValues {
  streetAddressFrom: string;
  cityFrom: string;
  postCodeFrom: string;
  countryFrom: string;
  clientName: string;
  clientEmail: string;
  clientAddress: string;
  clientCity: string;
  clientPostCode: string;
  clientCountry: string;
  invoiceDate: string;
  paymentTerms: string;
  projectDescription: string;
  items: Array<{
    name: string;
    quantity: string;
    price: string;
    total: string;
  }>;
}

const FormItems = () => {
  const { values, setFieldValue } = useFormikContext<FormValues>();
  const textColor = useColorModeValue("gray.800", "gray.600");

  const handleQuantityChange = (index: number, quantity: string) => {
    const price = values.items[index].price;
    const total = (parseFloat(quantity) * parseFloat(price))
      .toFixed(2)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      .toString();
    setFieldValue(`items[${index}].total`, total);
  };

  const handlePriceChange = (index: number, price: string) => {
    const quantity = values.items[index].quantity;
    const total = (parseFloat(quantity) * parseFloat(price))
      .toFixed(2)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      .toString();
    setFieldValue(`items[${index}].total`, total);
  };

  return (
    <VStack align="stretch" w="full">
      <Text className="hs" color="#777F98" mb={4}>
        Item List
      </Text>
      <FieldArray
        name="items"
        render={(arrayHelpers) => (
          <>
            {values.items &&
              values.items.length > 0 &&
              values.items.map((_item, index) => (
                <HStack
                  height="100%"
                  width="100%"
                  key={index}
                  textColor={textColor}
                  spacing={4}
                  mb={3}
                  align="flex-end"
                  justify="space-between"
                >
                  <FormField
                    width="13.4rem"
                    name={`items[${index}].name`}
                    label="Item Name"
                    noLabel={index !== 0}
                    noError
                  />
                  <FormField
                    width="2.9rem"
                    name={`items[${index}].quantity`}
                    label="Qty."
                    noLabel={index !== 0}
                    noError
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleQuantityChange(index, e.target.value)
                    }
                  />
                  <FormField
                    width="6.25rem"
                    name={`items[${index}].price`}
                    label="Price"
                    noLabel={index !== 0}
                    noError
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handlePriceChange(index, e.target.value)
                    }
                  />
                  <FormField
                    width="6.25rem"
                    name={`items[${index}].total`}
                    label="Total"
                    noLabel={index !== 0}
                    noError
                    noEdit
                  />
                  <HStack
                    minH="3rem"
                    onClick={() => arrayHelpers.remove(index)}
                    cursor="pointer"
                    justify="center"
                  >
                    <svg
                      width="13"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z"
                        fill="#888EB0"
                        fillRule="nonzero"
                      />
                    </svg>
                  </HStack>
                </HStack>
              ))}
          </>
        )}
      />
    </VStack>
  );
};

export default FormItems;
