/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from ".";
import { NavigationItem } from "./types.td";

describe("Header tests", () => {
  const createWrapper = () => {
    return ({ children }: any) => <BrowserRouter>{children}</BrowserRouter>;
  };

  it("Should render with given text", () => {
    const menuItems: NavigationItem[] = [
      { name: "Home", path: "/" },
      { name: "Orders", path: "/orders" },
      { name: "Product", path: "/products" },
    ];
    const { container } = render(<Header items={menuItems} />, {
      wrapper: createWrapper(),
    });

    expect(container).toBeTruthy();
    expect(container.querySelectorAll("li")).toHaveLength(3);
  });
});
