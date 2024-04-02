import { Divider, Image, VStack, useColorMode } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";
import userImage from "../assets/image-avatar.jpg";

const Sidebar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack
      width="6.44rem"
      height="100vh"
      justify="space-between"
      bg="gray.700"
      borderRightRadius="1.5rem"
      overflow="hidden"
      paddingBottom="1rem"
    >
      <VStack
        width="6.44rem"
        height="6.44rem"
        bg="purple.800"
        justify="center"
        position="relative"
        overflow="hidden"
        borderRightRadius="1.5rem"
      >
        <VStack
          width="6.44rem"
          height="6.44rem"
          position="absolute"
          top="3.25rem"
          borderLeftRadius="1.5rem"
          bg="purple.700"
          zIndex={0}
        ></VStack>
        <Image width="40px" height="40px" src={logo} zIndex={1} />
      </VStack>
      <VStack height="7.3rem" width="100%" justify="space-between">
        <Image
          width="1.5rem"
          src={colorMode === "light" ? moon : sun}
          cursor="pointer"
          onClick={toggleColorMode}
        />
        <Divider />
        <Image maxW="2.5rem" src={userImage} borderRadius="50%" />
      </VStack>
    </VStack>
  );
};

export default Sidebar;
