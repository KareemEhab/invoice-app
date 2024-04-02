import { HStack } from "@chakra-ui/react";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <HStack minW="100vw" minH="100vh" bg="gray.bg">
      <Sidebar />
      {/* <Home /> */}
    </HStack>
  );
}

export default App;
