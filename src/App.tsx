import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import Header from "src/components/molecules/header";
import Body from "./components/molecules/body";

import store from "./store";
import { items } from "src/constants/menu";

function App() {
  const persistor = persistStore(store);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={<h1>Loading</h1>} persistor={persistor}>
          <Header items={items} />
          <Body />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
