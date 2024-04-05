import { Button, Text, useColorModeValue } from "@chakra-ui/react";

interface Props {
  width?: string;
  children: string;
  onClick: () => void;
}

const Button4 = ({ width, children, onClick }: Props) => {
  const color = useColorModeValue("gray.700", "black.400");
  const hoverColor = useColorModeValue("black.600", "black.500");
  const textColor = useColorModeValue("gray.800", "gray.600");
  return (
    <Button
      width={width ? width : "8.3rem"}
      height="3rem"
      bg={color}
      onClick={onClick}
      borderRadius="full"
      border="none"
      _hover={{ bg: hoverColor }}
    >
      <Text color={textColor}>{children}</Text>
    </Button>
  );
};

export default Button4;
