import { HStack, Image, Text, useColorModeValue } from "@chakra-ui/react";
import arrowLeft from "../../assets/icon-arrow-left.svg";
import { useNavigate } from "react-router-dom";

const GoBackBtn = () => {
  const textColor = useColorModeValue("black.600", "white");
  const hoverColor = useColorModeValue("gray.600", "gray.800");
  const navigate = useNavigate();

  return (
    <HStack
      width="fit-content"
      gap="1rem"
      cursor="pointer"
      onClick={() => {
        navigate(-1);
      }}
      _hover={{ "& .textBox": { color: hoverColor } }}
    >
      <Image src={arrowLeft} />
      <Text className="hs textBox" color={textColor}>
        Go back
      </Text>
    </HStack>
  );
};

export default GoBackBtn;
