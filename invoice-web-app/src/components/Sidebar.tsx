import { Divider, Image, VStack, useColorMode } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";
import userImage from "../assets/image-avatar.jpg";

const Sidebar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack
      width={{ base: "100vw", lg: "6.44rem" }}
      height={{ base: "4.5rem", md: "5rem", lg: "100vh" }}
      justify="space-between"
      bg="gray.700"
      borderRightRadius={{ lg: "1.5rem" }}
      overflow="hidden"
      paddingBottom={{ lg: "1rem" }}
      paddingRight={{ base: "1rem", lg: 0 }}
      flexDir={{ base: "row", lg: "column" }}
    >
      <VStack
        width={{ base: "4.5rem", md: "5rem", lg: "6.44rem" }}
        height={{ base: "4.5rem", md: "5rem", lg: "6.44rem" }}
        bg="purple.800"
        justify="center"
        position="relative"
        overflow="hidden"
        borderRightRadius="1.5rem"
        flexDir={{ base: "row", lg: "column" }}
      >
        <VStack
          width={{ base: "4.5rem", md: "5rem", lg: "6.44rem" }}
          height={{ base: "4.5rem", md: "5rem", lg: "6.44rem" }}
          position="absolute"
          top={{ base: "2.25rem", md: "2.75rem", lg: "3.25rem" }}
          borderLeftRadius="1.5rem"
          bg="purple.700"
          zIndex={0}
          flexDir={{ base: "row", lg: "column" }}
        ></VStack>
        <Image
          width={{ base: "28px", md: "32px", lg: "40px" }}
          height={{ base: "28px", md: "32px", lg: "40px" }}
          src={logo}
          zIndex={1}
        />
      </VStack>
      <VStack
        height={{ base: "100%", lg: "7.3rem" }}
        width={{ base: "7.3rem", lg: "100%" }}
        justify="space-between"
        flexDir={{ base: "row", lg: "column" }}
      >
        <Image
          width="1.5rem"
          src={colorMode === "light" ? moon : sun}
          cursor="pointer"
          onClick={toggleColorMode}
        />
        <Divider orientation="vertical" />
        <Image maxW="2.5rem" src={userImage} borderRadius="50%" />
      </VStack>
    </VStack>
  );
};

export default Sidebar;
