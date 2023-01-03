import { useState, useEffect } from "react";
import { invoicesArr } from "../../common/invoices";
import { NavItem } from "../AppBar/AppBar.styled";
import { Container } from "./Invoices.styled";
import { Outlet } from "react-router-dom";

const Invoices = () => {
  const [invoices, setInvoices] = useState(null);

  useEffect(() => {
    setInvoices(invoicesArr);
  }, []);

  if (!invoices) {
    return;
  }

  return (
    <div style={{ display: "flex" }}>
      <Container>
        {invoices.map(({ id }) => (
          <NavItem key={id} to={`${id}`}>
            Invoice: {id}
          </NavItem>
        ))}
      </Container>
      <Outlet />
    </div>
  );
};

export default Invoices;
