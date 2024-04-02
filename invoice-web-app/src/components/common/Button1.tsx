import { Button, HStack, Image, Text } from "@chakra-ui/react";
import iconPlus from "../../assets/icon-plus.svg";

interface Props {
  children: string | undefined;
  onClick: () => void;
}

const Button1 = ({ children, onClick }: Props) => {
  return (
    <Button
      width={{ base: "5.65rem", md: "9.375rem" }}
      height="3rem"
      bg="purple.800"
      onClick={onClick}
      borderRadius="full"
      paddingX={0}
      paddingRight={2}
      _hover={{ bg: "purple.700" }}
    >
      <HStack gap={{ base: "0.5rem", md: "1rem" }}>
        <HStack
          width="2rem"
          height="2rem"
          bg="white"
          borderRadius="50%"
          justify="center"
        >
          <Image src={iconPlus} />
        </HStack>
        <Text color="white">{children}</Text>
      </HStack>
    </Button>
  );
};

export default Button1;
