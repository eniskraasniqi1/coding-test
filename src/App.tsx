import Header from "./components/molecules/header/index";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import { items } from "./constants/menu";

function App() {
  return (
    <BrowserRouter>
      <Header items={items} />
      <Switch>
        <Route
          path="/orders"
          element={<div children="my list of orders come here" />}
        />
        <Route
          path="/orders/edit/:id"
          element={<div children="edit order comes here" />}
        />
        <Route path="*" element={<div>404 not found</div>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
