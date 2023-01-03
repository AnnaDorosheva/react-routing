import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Main = styled.main`
display: flex;
justify-content: center;
flex-direction: column;
margin: 8px;
`
export const ButtonStyled = styled(Link)` 
font-size: 20px;
font-weight: 600;
color: black;
text-decoration: none;
border: 2px solid #4d4b49;
border-radius: 16px;
width: 18%;
padding: 6px;
background-color: #5f7f96;
margin: 0 auto;
margin-bottom: 14px; 

:hover:not(.active),
  :focus-visible:not(.active) {
    color: #3239ba;
    background-color: rgba(184, 208, 219, 0.5);
    transform: scale(1.03);
    transition: 0.5s;
  }
`