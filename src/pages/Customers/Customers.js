import { useState, useEffect, useMemo } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { customersArr } from "../../common/customers";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import { LinkStyled, Li } from "./Custmers.styled";

const Customers = () => {
  const location = useLocation();
  const [customers, setCustomers] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filterParams = searchParams.get("filter") ?? "";

  // для запросов на бекенд:
  useEffect(() => {
    setCustomers(customersArr);
  }, []);

  const filterChange = (value) => {
    setSearchParams(value !== "" ? { filter: value } : {});
  };

  const visibleCustomers = useMemo(() => {
    return customers.filter((customer) =>
      customer.name.toLowerCase().includes(filterParams.toLowerCase())
    );
  }, [customers, filterParams]);

  return (
    <main>
      <SearchBox value={filterParams} onChangeFilter={filterChange} />
      {visibleCustomers.length > 0 && (
        <ul>
          {visibleCustomers.map((customer) => (
            <Li key={customer.id}>
              <LinkStyled to={`${customer.id}`} state={{ from: location }}>
                {customer.name}
              </LinkStyled>
            </Li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Customers;
