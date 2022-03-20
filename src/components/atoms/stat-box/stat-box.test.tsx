import { render, screen } from "@testing-library/react";
import StatBox from ".";

describe("StatBox tests", () => {
  it("Should render the given values", () => {
    render(<StatBox label="label" value={"labelvalue"} />);
    expect(screen.getByText("label")).toBeTruthy();
    expect(screen.getByText("labelvalue")).toBeTruthy();
  });
});
