import {
  Text,
  FormControl,
  FormLabel,
  HStack,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import { useField } from "formik";

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  width?: string;
  type?: string;
  noLabel?: boolean;
  noError?: boolean;
  noEdit?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function FormField({
  label,
  name,
  placeholder,
  width,
  type,
  noLabel,
  noError,
  noEdit,
  onChange,
}: Props) {
  const bgColor = useColorModeValue("white", "black.500");
  const headerColor = useColorModeValue("black.600", "white");
  const textColor = useColorModeValue("gray.800", "gray.600");
  const borderColor = useColorModeValue("gray.600", "black.400");

  const [field, meta] = useField(name);
  const isError = meta.touched && meta.error;

  return (
    <FormControl width={{ base: "100%", md: width ? width : "9.5rem" }}>
      {!noLabel && (
        <HStack
          className="body"
          justify="space-between"
          maxW="100%"
          align="flex-start"
        >
          <FormLabel
            fontSize="0.75rem"
            fontWeight="bold"
            color={isError ? "red.main" : textColor}
            htmlFor={name}
          >
            {label}
          </FormLabel>
          {isError && !noError && (
            <Text fontSize="0.75rem" fontWeight="500" color="red.main">
              {meta.error}
            </Text>
          )}
        </HStack>
      )}
      <Input
        type={type ? type : "text"}
        width="100%"
        height="3.5rem"
        fontSize="0.875rem"
        fontWeight="bold"
        bg={bgColor}
        color={headerColor}
        {...field}
        id={name}
        borderColor={isError ? "red.main" : borderColor}
        borderWidth="1px"
        borderRadius="0.5rem"
        _focus={{ borderColor: "purple.800", boxShadow: "none" }}
        _hover={{ borderColor: "purple.800", boxShadow: "none" }}
        placeholder={placeholder}
        _placeholder={{ color: headerColor }}
        onChange={(e) => {
          field.onChange(e);
          if (onChange) onChange(e);
        }}
        pointerEvents={noEdit ? "none" : "auto"}
      />
    </FormControl>
  );
}

export default FormField;
