import styled from "@emotion/styled";
import { Link } from "react-router-dom";


export const LinkStyled = styled(Link)`  
display: flex;
flex-direction: column;
text-decoration: none;
font-size: 20px;
font-weight: 500;
color: #4d4b49;

:hover:not(.active),
  :focus-visible:not(.active) {
    color: #3239ba;
    background-color: rgba(184, 208, 219, 0.5);
    transform: scale(1.03);
    transition: 0.5s;
    }
` 
export const Li = styled.li`  
list-style: none;
`