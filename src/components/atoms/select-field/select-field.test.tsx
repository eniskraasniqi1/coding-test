/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React from "react";
import { render, screen } from "@testing-library/react";
import SelectField from ".";

describe("SelectField tests", () => {
  it("Should render with given text", () => {
    const { container } = render(
      <SelectField
        label="Click here!"
        error=""
        select={{ name: "name", id: "name", value: "Eniss", type: "submit" }}
      />
    );

    expect(container).toBeTruthy();
    expect(screen.getByText("Click here!")).toBeTruthy();
  });

  it("Should render options", () => {
    const { container } = render(
      <SelectField
        label="Click here!"
        error=""
        options={[
          { label: "Click", value: "click" },
          { label: "Click 2", value: "click2" },
        ]}
        select={{ name: "name", id: "name", value: "Eniss", type: "submit" }}
      />
    );

    expect(container).toBeTruthy();
    expect(screen.getByText("Click")).toBeTruthy();
    expect(container.querySelectorAll("option")).toHaveLength(2);
  });

  it("Should add asterisk in the label", () => {
    render(
      <SelectField
        label="Test!"
        error=""
        required
        select={{ name: "name", id: "name", value: "Eniss", type: "submit" }}
      />
    );

    expect(screen.getByText("*")).toBeTruthy();
  });

  it("Should show Error", () => {
    render(
      <SelectField
        label="Test!"
        error="This should show ERROR!"
        required
        select={{ name: "name", id: "name", value: "Enis", type: "submit" }}
      />
    );

    expect(screen.getByText("This should show ERROR!")).toBeTruthy();
  });
});
