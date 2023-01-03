import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header, List } from "./Sales.styled";
import { NavItem } from "../../components/AppBar/AppBar.styled";

const navItems = [
  { href: "analytics", text: "Analytics" },
  { href: "invoices", text: "Invoices" },
  { href: "deposits", text: "Deposits" },
];

const Sales = () => {
  return (
    <main>
      <Header>Sales List</Header>
      <List>
        {navItems.map(({ href, text }) => (
          <NavItem key={href} to={href}>
            {text}
          </NavItem>
        ))}
      </List>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default Sales;
