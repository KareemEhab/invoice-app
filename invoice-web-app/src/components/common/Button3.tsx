import { Button, Text, useColorModeValue } from "@chakra-ui/react";

interface Props {
  children: string;
  onClick: () => void;
}

const Button3 = ({ children, onClick }: Props) => {
  const color = useColorModeValue("white.700", "black.400");
  const hoverColor = useColorModeValue("gray.600", "white.800");
  const textColor = useColorModeValue("purple.900", "gray.600");
  return (
    <Button
      width="4.56rem"
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

export default Button3;
