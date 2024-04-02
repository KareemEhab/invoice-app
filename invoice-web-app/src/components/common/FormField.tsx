import { Text, FormControl, FormLabel, HStack, Input } from "@chakra-ui/react";
import { useField } from "formik";

interface Props {
  label: string;
  name: string;
  placeholder: string;
  width?: string;
  type?: string;
}

function FormField({ label, name, placeholder, width, type }: Props) {
  const [field, meta] = useField(name);

  const isError = meta.touched && meta.error;

  return (
    <FormControl>
      <HStack justify="space-between" maxW="100%">
        <FormLabel
          fontSize="0.75rem"
          fontWeight="bold"
          color={isError ? "red" : "black.800"}
          htmlFor={name}
        >
          {label}
        </FormLabel>
        {isError && (
          <Text fontSize="0.75rem" fontWeight="500" color="red">
            {meta.error}
          </Text>
        )}
      </HStack>
      <Input
        type={type ? type : "text"}
        width={{ base: "100%", md: width ? width : "19.3125rem" }}
        height="3.5rem"
        fontSize="0.875rem"
        fontWeight="bold"
        color="black.800"
        {...field}
        id={name}
        borderColor={isError ? "red" : "white.500"}
        borderWidth="2px"
        borderRadius="0.5rem"
        _focus={{ borderColor: "orange.800", boxShadow: "none" }}
        _hover={{ borderColor: "orange.800", boxShadow: "none" }}
        placeholder={placeholder}
      />
    </FormControl>
  );
}

export default FormField;
