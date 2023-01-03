import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  min-width: 60px;
  font-size: 20px;
  font-weight: 600;
  padding: 6px;
  border-radius: 6px;
  text-decoration: none;
  color: #75736c;
  margin: 2px;

  &.active {
    background-color: #318bb5;
    color: white;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #3239ba;
    background-color: rgba(184, 208, 219, 0.5);
    transform: scale(1.03);
    transition: 0.5s;
  }
`;
