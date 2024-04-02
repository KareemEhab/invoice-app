import { Button, Text } from "@chakra-ui/react";

interface Props {
  children: string;
  onClick: () => void;
}

const Button2 = ({ children, onClick }: Props) => {
  return (
    <Button
      width="8.2rem"
      height="3rem"
      bg="purple.800"
      onClick={onClick}
      borderRadius="full"
      _hover={{ bg: "purple.700" }}
    >
      <Text>{children}</Text>
    </Button>
  );
};

export default Button2;
