import { HStack, VStack, useColorModeValue } from "@chakra-ui/react";
import { Form, Formik, FormikProps, FormikValues } from "formik";
import { useRef } from "react";
import * as Yup from "yup";
import FormSender from "./FormSender";
import FormClient from "./FormClient";
import FormItems from "./FormItems";
import styled from "@emotion/styled";
import Button6 from "./common/Button6";
import Button2 from "./common/Button2";
import Button4 from "./common/Button4";
import Button7 from "./common/Button7";
import { Invoice } from "../hooks/useInvoice";

interface StyledVStackProps {
  bgColor: string;
  scrollbarcolor: string;
}

// Styled component for customizing the scrollbar
const StyledVStack = styled(VStack)<StyledVStackProps>`
  &::-webkit-scrollbar {
    width: 8px; /* Width of the scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: ${({ bgColor }) => bgColor}; /* Color of the scrollbar track */
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ scrollbarcolor }) =>
      scrollbarcolor}; /* Color of the scrollbar thumb */
    border-radius: 4px; /* Roundness of the scrollbar thumb */
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ scrollbarcolor }) =>
      scrollbarcolor}; /* Color of the scrollbar thumb on hover */
  }
`;

interface Props {
  invoiceToEdit?: Invoice;
  onToggleForm: () => void;
}

const FormInvoice = ({ invoiceToEdit, onToggleForm }: Props) => {
  const bgColor = useColorModeValue("white", "black.700");
  const bg2Color = useColorModeValue("white", "black.500");
  const scrollbarcolor = useColorModeValue("#DFE3FA", "#252945");

  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

  const initialValues = {
    streetAddressFrom: invoiceToEdit ? invoiceToEdit.senderAddress.street : "",
    cityFrom: invoiceToEdit ? invoiceToEdit.senderAddress.city : "",
    postCodeFrom: invoiceToEdit ? invoiceToEdit.senderAddress.postCode : "",
    countryFrom: invoiceToEdit ? invoiceToEdit.senderAddress.country : "",
    clientName: invoiceToEdit ? invoiceToEdit.clientName : "",
    clientEmail: invoiceToEdit ? invoiceToEdit.clientEmail : "",
    clientAddress: invoiceToEdit ? invoiceToEdit.clientAddress.street : "",
    clientCity: invoiceToEdit ? invoiceToEdit.clientAddress.city : "",
    clientPostCode: invoiceToEdit ? invoiceToEdit.clientAddress.postCode : "",
    clientCountry: invoiceToEdit ? invoiceToEdit.clientAddress.country : "",
    invoiceDate: invoiceToEdit ? invoiceToEdit.paymentDue : formattedDate, // Set today's date as the initial value for invoiceDate
    paymentTerms: invoiceToEdit ? invoiceToEdit.paymentTerms : "",
    projectDescription: invoiceToEdit ? invoiceToEdit.description : "",
    items: invoiceToEdit ? invoiceToEdit.items : [],
  };

  const itemSchema = Yup.object().shape({
    name: Yup.string().required("can't be empty"),
    quantity: Yup.number().required("can't be empty"),
    price: Yup.number().required("can't be empty"),
    total: Yup.number().required("can't be empty"),
  });

  const validationSchema = Yup.object().shape({
    streetAddressFrom: Yup.string().required("can't be empty"),
    cityFrom: Yup.string().required("can't be empty"),
    postCodeFrom: Yup.string().required("can't be empty"),
    countryFrom: Yup.string().required("can't be empty"),
    clientName: Yup.string().required("can't be empty"),
    clientEmail: Yup.string().email("Wrong format").required("can't be empty"),
    clientAddress: Yup.string().required("can't be empty"),
    clientCity: Yup.string().required("can't be empty"),
    clientPostCode: Yup.string().required("can't be empty"),
    clientCountry: Yup.string().required("can't be empty"),
    invoiceDate: Yup.date()
      .required("can't be empty")
      .default(() => new Date(formattedDate)),
    paymentTerms: Yup.string().required("can't be empty"),
    projectDescription: Yup.string().required("can't be empty"),
    items: Yup.array().of(itemSchema), // Validate as an array of Item objects
  });

  const formikRef = useRef<any>(null);

  const handleSubmit = (values: FormikValues) => {
    // Handle form submission logic here
    console.log(values);
  };

  const handleDiscard = () => {
    if (formikRef.current) {
      formikRef.current.resetForm();
      onToggleForm();
    }
  };

  return (
    <StyledVStack
      bgColor={bgColor}
      scrollbarcolor={scrollbarcolor}
      width={{ base: "100vw", md: "45rem" }}
      maxW="100vw"
      minH="100vh"
      maxH="100vh"
      paddingLeft={{ base: "3rem", lg: "9rem" }}
      paddingRight="3rem"
      paddingY="3rem"
      overflow="auto"
      borderRightRadius="0.5rem"
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        innerRef={formikRef}
        enableReinitialize={true}
      >
        {(formikProps: FormikProps<typeof initialValues>) => (
          <Form style={{ width: "100%" }}>
            <VStack width="100%" align="start" spacing={4} gap="3rem">
              <FormSender />
              <FormClient />
              <FormItems />
              <Button6
                onClick={() => {
                  const newItem = {
                    name: "",
                    quantity: "0",
                    price: "0",
                    total: "0",
                  };
                  const newItems = [...formikProps.values.items, newItem];
                  formikProps.setFieldValue("items", newItems);
                }}
              >
                + Add New Itme
              </Button6>
              <HStack
                width="100%"
                height="5.63rem"
                justify="space-between"
                position={{ base: "absolute", lg: "relative" }}
                bottom={0}
                left={0}
                bg={{ base: bg2Color, md: "none" }}
              >
                <Button7 width="100%" onClick={handleDiscard}>
                  Discard
                </Button7>
                <HStack width="75%">
                  <Button4 width="100%" onClick={() => {}}>
                    Draft
                  </Button4>
                  <Button2 width="100%" type="submit" onClick={() => {}}>
                    Save
                  </Button2>
                </HStack>
              </HStack>
            </VStack>
          </Form>
        )}
      </Formik>
    </StyledVStack>
  );
};

export default FormInvoice;
