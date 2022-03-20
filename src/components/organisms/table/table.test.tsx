import { render, screen } from "@testing-library/react";
import Table from ".";

describe("Table tests", () => {
  it("Should render the table headers and rows", () => {
    const { container } = render(
      <Table
        headerList={["ID."]}
        items={[{ id: "ok" }]}
        onClick={(path, e) => {}}
      />
    );
    expect(container).toBeTruthy();
    expect(screen.getByText("ID.")).toBeTruthy();
    expect(screen.getByText("ok")).toBeTruthy();
  });
});
