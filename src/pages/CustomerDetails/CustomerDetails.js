import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { customersArr } from "../../common/customers";
import { Main, ButtonStyled } from "./CustomerDetails.styled";

export const CustomerDetails = () => {
  const { customerId } = useParams();
  const [customer, setCustumer] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const currentCustomer = customersArr.find(
      (customer) => customer.id === Number(customerId)
    );
    setCustumer(currentCustomer);
  }, [customerId]);

  if (!customer) {
    return null;
  }

  return (
    <Main>
      <ButtonStyled to={location.state?.from ?? "/customers"}>
        Back to customers
      </ButtonStyled>
      <div>Customer Id: {customer.id}</div>
      <div>Customer Name: {customer.name}</div>
    </Main>
  );
};
