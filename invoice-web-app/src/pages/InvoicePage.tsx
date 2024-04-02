import { useParams } from "react-router-dom";
import { Invoice } from "../hooks/useInvoice";

interface Props {
  invoices: Invoice[];
}

const InvoicePage = ({ invoices }: Props) => {
  const params = useParams();
  const { invoiceID } = params;
  const invoice: Invoice | undefined = invoices.find(
    (invoice) => invoice.id === invoiceID
  );

  if (!invoice) return "Not found";
  return <div>Invoice</div>;
};

export default InvoicePage;
