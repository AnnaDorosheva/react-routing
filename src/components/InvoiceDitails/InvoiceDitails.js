import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { invoiceFiltered } from "../../common/invoices";

export const InvoiceDitails = () => {
  const { invoiceId } = useParams();
  const [invoce, setInvoice] = useState(null);

  // при получении данных с бека используем юсстейт
  useEffect(() => {
    setInvoice(invoiceFiltered(invoiceId));
  }, [invoiceId]);

  if (!invoce) {
    return null;
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        padding: "10px",
      }}
    >
      <h2>InvoiceDitails {invoiceId}</h2>
      <h3>
        <b>Recipient:</b> {invoce.recipient}
      </h3>
      <p>
        <b>Account number:</b> {invoce.account}
      </p>
      <p>
        <b>Total due:</b> {invoce.total}$
      </p>
      <p>
        <b>Invoice date:</b>{" "}
        {new Date(invoce.date.created).toLocaleDateString()}
      </p>
      <p>
        <b>Due date: </b> {new Date(invoce.date.due).toLocaleDateString()}
      </p>
    </div>
  );
};
