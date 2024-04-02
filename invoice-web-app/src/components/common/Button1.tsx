import { Button, HStack, Image, Text } from "@chakra-ui/react";
import iconPlus from "../../assets/icon-plus.svg";

interface Props {
  children: string;
  onClick: () => void;
}

const Button1 = ({ children, onClick }: Props) => {
  return (
    <Button
      width="9.375rem"
      height="3rem"
      bg="purple.800"
      onClick={onClick}
      borderRadius="full"
      paddingX={0}
      paddingRight={2}
      _hover={{ bg: "purple.700" }}
    >
      <HStack gap="1rem">
        <HStack
          width="2rem"
          height="2rem"
          bg="white"
          borderRadius="50%"
          justify="center"
        >
          <Image src={iconPlus} />
        </HStack>
        <Text>{children}</Text>
      </HStack>
    </Button>
  );
};

export default Button1;
