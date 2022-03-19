/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React from "react";
import { render, screen } from "@testing-library/react";
import Button from ".";

describe("Button tests", () => {
  it("Should render with given text", () => {
    const { container } = render(<Button btnText="Click here!" />);
    expect(container).toBeTruthy();
    expect(screen.getByText("Click here!")).toBeTruthy();
  });

  it("Should render with given type", () => {
    render(<Button type="button" btnText="Click!" />);
    expect(screen.getAllByRole("button")).toBeTruthy();
  });

  it("Should render with given style by className", () => {
    const { container } = render(
      <Button type="button" className="danger" btnText="Click!" />
    );
    expect(container.querySelector(".danger")).toBeTruthy();
  });
});
