import { HStack, useColorModeValue } from "@chakra-ui/react";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import data from "../data.json";

function App() {
  const bgColor = useColorModeValue("gray.lightBg", "gray.darkBg");

  return (
    <HStack minW="100vw" minH="100vh" bg={bgColor} gap={0}>
      <Sidebar />
      <Home invoices={data} />
    </HStack>
  );
}

export default App;
