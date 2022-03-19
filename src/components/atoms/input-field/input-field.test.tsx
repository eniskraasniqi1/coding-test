/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React from "react";
import { render, screen } from "@testing-library/react";
import InputField from ".";

describe("InputField tests", () => {
  it("Should render with given text", () => {
    const { container } = render(
      <InputField
        label="Click here!"
        error=""
        input={{ name: "name", id: "name", value: "Enis", type: "submit" }}
      />
    );

    expect(container).toBeTruthy();
    expect(screen.getByText("Click here!")).toBeTruthy();
    expect(screen.getByText("Enis")).toBeTruthy();
  });

  it("Should add asterisk in the label", () => {
    render(
      <InputField
        label="Test!"
        error=""
        required
        input={{ name: "name", id: "name", value: "Enis", type: "submit" }}
      />
    );

    expect(screen.getByText("*")).toBeTruthy();
  });

  it("Should show Error", () => {
    render(
      <InputField
        label="Test!"
        error="This is not OK!"
        required
        input={{ name: "name", id: "name", value: "Enis", type: "submit" }}
      />
    );

    expect(screen.getByText("This is not OK!")).toBeTruthy();
  });
});
