import { Button, Text } from "@chakra-ui/react";

interface Props {
  width?: string;
  children: string;
  onClick: () => void;
}

const Button7 = ({ width, children, onClick }: Props) => {
  return (
    <Button
      width={width ? width : "4.56rem"}
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

export default Button7;
