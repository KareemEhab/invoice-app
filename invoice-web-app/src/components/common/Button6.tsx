import { Button, Text, useColorModeValue } from "@chakra-ui/react";

interface Props {
  children: string;
  onClick: () => void;
}

const Button6 = ({ children, onClick }: Props) => {
  const bgColor = useColorModeValue("white", "black.500");
  const hoverColor = useColorModeValue("gray.600", "black.600");
  return (
    <Button
      width="100%"
      height="3rem"
      bg={bgColor}
      onClick={onClick}
      borderRadius="full"
      border="none"
      _hover={{ bg: hoverColor }}
    >
      <Text color="purple.900">{children}</Text>
    </Button>
  );
};

export default Button6;
