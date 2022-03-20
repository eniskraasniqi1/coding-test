/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-wait-for-side-effects */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import AddOrder from ".";
import store from "src/store";
import { persistStore } from "redux-persist";

describe("AddOrder tests", () => {
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

  it("Should render AddOrder", () => {
    let value = 0;
    const { container } = render(<AddOrder onSubmit={() => (value += 1)} />, {
      wrapper: createWrapper(),
    });

    expect(container).toBeTruthy();
  });

  it("Should submit on onSubmit", async () => {});
});
