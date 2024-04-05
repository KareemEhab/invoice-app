import { Button, Text } from "@chakra-ui/react";

interface Props {
  width?: string;
  children: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset"; // Restrict type to these specific values
}

const Button2 = ({ width, children, onClick, type }: Props) => {
  const buttonType =
    type === "button" || type === "submit" || type === "reset"
      ? type
      : "button";

  return (
    <Button
      width={width ? width : "8.2rem"}
      height="3rem"
      bg="purple.800"
      onClick={onClick}
      borderRadius="full"
      _hover={{ bg: "purple.700" }}
      type={buttonType}
    >
      <Text color="white">{children}</Text>
    </Button>
  );
};

export default Button2;
