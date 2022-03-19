/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import TableBody from ".";
import { customers } from "src/data/customers";
import { Customer } from "src/types";

describe("TableBody tests", () => {
  it("Should render with given list", () => {
    const { container } = render(<TableBody items={customers} />);
    expect(container).toBeTruthy();
    expect(container.querySelectorAll("tr")).toHaveLength(3);
  });

  it("Should delete row", () => {
    let fullCustomers = customers;

    const handleDelete = (id: string) =>
      (fullCustomers = customers.filter(
        (customer: Customer) => customer.id !== id
      ));

    const { container } = render(
      <TableBody items={customers} onDelete={handleDelete} />
    );
    expect(container.querySelectorAll("tr")).toHaveLength(3);
    const button: any = container.querySelector(".danger");
    fireEvent.click(button);

    const { container: container2 } = render(
      <TableBody items={fullCustomers} onDelete={handleDelete} />
    );

    expect(container2.querySelectorAll("tr")).toHaveLength(2);
  });
});
