import { Button, Text } from "@chakra-ui/react";

interface Props {
  children: string;
  onClick: () => void;
}

const Button5 = ({ children, onClick }: Props) => {
  return (
    <Button
      width="5.56rem"
      height="3rem"
      bg="red.main"
      onClick={onClick}
      borderRadius="full"
      border="none"
      _hover={{ bg: "red.light" }}
    >
      <Text color="white">{children}</Text>
    </Button>
  );
};

export default Button5;
