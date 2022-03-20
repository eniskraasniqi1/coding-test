/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render, screen } from "@testing-library/react";
import TableHeader from ".";

describe("TableHeader tests", () => {
  const createWrapper = () => {
    return ({ children }: any) => <table>{children}</table>;
  };
  it("Should render list items", () => {
    const list: string[] = ["Orders", "Products", "Customers"];
    const { container } = render(<TableHeader list={list} />, {
      wrapper: createWrapper(),
    });

    expect(container).toBeTruthy();
    expect(container.querySelectorAll("th")).toHaveLength(4);
  });

  it("Should show the add Button", () => {
    const list: string[] = ["Orders", "Products", "Customers"];
    const { container } = render(
      <TableHeader list={list} addRow={() => {}} />,
      { wrapper: createWrapper() }
    );

    expect(container).toBeTruthy();
    const button = screen.getByRole("button");
    expect(button).toBeTruthy();
  });
});
