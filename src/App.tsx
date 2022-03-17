import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import { Orders, EditOrder, ViewOrder } from "./pages/Order";
import Header from "src/components/molecules/header/index";

import { items } from "src/constants/menu";

function App() {
  return (
    <BrowserRouter>
      <Header items={items} />
      <div className="body-container">
        <Switch>
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/:id" element={<ViewOrder />} />
          <Route path="/orders/edit/:id" element={<EditOrder />} />
          <Route path="*" element={<div>404 not found</div>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
