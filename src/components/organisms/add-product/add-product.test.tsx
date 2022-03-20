/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-wait-for-side-effects */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import AddProduct from ".";
import store from "src/store";
import { persistStore } from "redux-persist";
import { act } from "react-dom/test-utils";

describe("AddProduct tests", () => {
  const persistor = persistStore(store);

  const createWrapper =
    () =>
    ({ children }: any) =>
      (
        <Provider store={store}>
          <PersistGate loading={<h1>Loading</h1>} persistor={persistor}>
            {children}
          </PersistGate>
        </Provider>
      );

  it("Should render AddProduct", () => {
    let value = 0;
    const { container } = render(<AddProduct onSubmit={() => (value += 1)} />, {
      wrapper: createWrapper(),
    });

    expect(container).toBeTruthy();
  });

  it("Should change on change event", async () => {
    const { container } = render(<AddProduct onSubmit={() => {}} />, {
      wrapper: createWrapper(),
    });

    const selectInput = container.querySelector("select") as HTMLSelectElement;
    const quantityInput = container.querySelectorAll(
      'input[type="text"]'
    )[0] as HTMLInputElement;
    const priceInput = container.querySelectorAll(
      'input[type="text"]'
    )[1] as HTMLInputElement;
    const totalInput = container.querySelectorAll(
      'input[type="text"]'
    )[2] as HTMLInputElement;

    act(() => {
      /* fire events that update state */
      selectInput && fireEvent.mouseDown(selectInput);
      quantityInput &&
        fireEvent.change(quantityInput, { target: { value: "3" } });
      priceInput &&
        fireEvent.change(priceInput, { target: { value: "12.31" } });
      totalInput &&
        fireEvent.change(totalInput, { target: { value: "36.93" } });
    });

    expect(quantityInput.value).toBe("3");
    expect(priceInput.value).toBe("12.31");
    expect(totalInput.value).toBe("36.93");
  });

  it("Should submit on onSubmit", async () => {});
});
