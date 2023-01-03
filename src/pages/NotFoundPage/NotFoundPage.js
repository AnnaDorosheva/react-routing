import React from "react";
import { Sale } from "../../components/DefaultPage/DefaultPage.styled";
import { ButtonStyled } from "../CustomerDetails/CustomerDetails.styled";

export const NotFoundPage = () => {
  return (
    <div style={{ margin: 30 }}>
      <ButtonStyled to="/">Back to sales</ButtonStyled>
      <Sale>Page not found</Sale>
    </div>
  );
};
