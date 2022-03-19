/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render, screen } from "@testing-library/react";
import TableHeader from ".";

describe("TableHeader tests", () => {
  it("Should render list items", () => {
    const list: string[] = ["Orders", "Products", "Customers"];
    const { container } = render(<TableHeader list={list} />);

    expect(container).toBeTruthy();
    expect(container.querySelectorAll("th")).toHaveLength(3);
  });

  it("Should show the add Button", () => {
    const list: string[] = ["Orders", "Products", "Customers"];
    const { container } = render(
      <TableHeader list={list} addRow={() => console.log("row")} />
    );

    expect(container).toBeTruthy();
    const button = screen.getByRole("button");
    expect(button).toBeTruthy();
  });
});
