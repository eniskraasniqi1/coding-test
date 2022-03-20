/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { fireEvent, render, screen } from "@testing-library/react";
import Modal from ".";

describe("Modal tests", () => {
  it("Should render with given children", () => {
    const { container } = render(<Modal show={true}>Children works!</Modal>);
    expect(container).toBeTruthy();
    expect(screen.getByText("Children works!")).toBeTruthy();
  });

  it("Renders nothing if show false", () => {
    render(<Modal show={false}>child!</Modal>);
    expect(screen.queryByText("child!")).toBeFalsy();
  });

  it("Closes on click", () => {
    const { container } = render(
      <Modal close={() => {}} show={true}>
        child!
      </Modal>
    );
    expect(screen.getByText("child!")).toBeTruthy();
    const button: Element | null = container.querySelector(".closeButton");

    button && fireEvent.click(button);
  });
});
