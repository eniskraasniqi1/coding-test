import { render, screen } from "@testing-library/react";
import NotFound from ".";

describe("NotFound tests", () => {
  it("Should render with given text", () => {
    render(<NotFound text="notfound!" />);
    expect(screen.getByText("notfound!")).toBeTruthy();
  });

  it("Should render with default value", () => {
    render(<NotFound />);
    expect(screen.getByText("Hmmm, that page does not exist...")).toBeTruthy();
  });
});
