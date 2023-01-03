import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
// import { Sales } from "./pages/Sales/Sales";
// import { Invoices } from "./components/Invoices/Invoices";
import { InvoiceDitails } from "./components/InvoiceDitails/InvoiceDitails";
import { DefaultPage } from "./components/DefaultPage/DefaultPage";
// import { Customers } from "./pages/Customers/Customers";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { CustomerDetails } from "./pages/CustomerDetails/CustomerDetails";
import { lazy } from "react";

const Sales = lazy(() => import("./pages/Sales/Sales"));
const Customers = lazy(() => import("./pages/Customers/Customers"));
const Invoices = lazy(() => import("./components/Invoices/Invoices"));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="sales" />} />
          <Route path="dashboard" element={<div>DaSHBOARD</div>} />
          <Route path="sales" element={<Sales />}>
            <Route index element={<DefaultPage />} />
            <Route path="analytics" element={<div>ANALYTICS</div>} />
            <Route path="invoices" element={<Invoices />}>
              <Route path=":invoiceId" element={<InvoiceDitails />} />
            </Route>
            <Route path="deposits" element={<div>DEPOSITS</div>} />
          </Route>
          <Route path="report" element={<div>report</div>} />
          <Route path="feedback" element={<div>feedback</div>} />
          <Route path="customers" element={<Customers />} />
          <Route path="customers/:customerId" element={<CustomerDetails />}/>
        </Route>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </div>
  );
}

export default App;
