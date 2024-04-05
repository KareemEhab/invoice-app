import { HStack, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import Home from "./pages/HomePage";
import Sidebar from "./components/Sidebar";
import data from "../data.json";
import { Routes, Route, Navigate } from "react-router-dom";
import InvoicePage from "./pages/InvoicePage";
import FormInvoice from "./components/FormInvoice";
import Overlay from "./components/common/Overlay";
import { Invoice } from "./hooks/useInvoice";
import { useEffect, useState } from "react";

function App() {
  const bgColor = useColorModeValue("gray.lightBg", "gray.darkBg");
  const { isOpen, onOpen, onToggle } = useDisclosure();

  const [invoiceToEdit, setInvoiceToEdit] = useState<Invoice>();

  useEffect(() => {
    if (!isOpen) {
      setInvoiceToEdit(undefined);
    }
  }, [isOpen]);

  return (
    <HStack
      minW="100vw"
      minH="100vh"
      bg={bgColor}
      gap={0}
      flexDir={{ base: "column", lg: "row" }}
      position="relative"
    >
      <Sidebar />
      <Routes>
        <Route
          path="/:invoiceID"
          element={
            <InvoicePage
              invoices={data}
              setInvoiceToEdit={setInvoiceToEdit}
              onOpenEditForm={onOpen}
            />
          }
        />
        <Route
          path="/"
          element={<Home invoices={data} newInvoice={onToggle} />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <HStack
        position="absolute"
        left={isOpen ? "0" : "-100%"}
        transition="left 0.5s ease"
        zIndex={1}
      >
        <FormInvoice onToggleForm={onToggle} invoiceToEdit={invoiceToEdit} />
      </HStack>
      {isOpen && <Overlay onClick={onToggle} />}
    </HStack>
  );
}

export default App;
