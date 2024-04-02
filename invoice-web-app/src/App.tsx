import { HStack, useColorModeValue } from "@chakra-ui/react";
import Home from "./pages/HomePage";
import Sidebar from "./components/Sidebar";
import data from "../data.json";
import { Routes, Route, Navigate } from "react-router-dom";
import Invoice from "./pages/InvoicePage";

function App() {
  const bgColor = useColorModeValue("gray.lightBg", "gray.darkBg");

  return (
    <HStack
      minW="100vw"
      minH="100vh"
      bg={bgColor}
      gap={0}
      flexDir={{ base: "column", lg: "row" }}
    >
      <Sidebar />
      <Routes>
        <Route path="/:invoiceID" element={<Invoice invoices={data} />} />
        <Route path="/" element={<Home invoices={data} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HStack>
  );
}

export default App;
