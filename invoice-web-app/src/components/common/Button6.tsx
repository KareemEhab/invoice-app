import { Button, Text } from "@chakra-ui/react";

interface Props {
  children: string;
  onClick: () => void;
}

const Button6 = ({ children, onClick }: Props) => {
  return (
    <Button
      width="21.875rem"
      height="3rem"
      bg="white.700"
      onClick={onClick}
      borderRadius="full"
      border="none"
      _hover={{ bg: "gray.600" }}
    >
      <Text color="purple.900">{children}</Text>
    </Button>
  );
};

export default Button6;
