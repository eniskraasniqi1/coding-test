import Header from "./components/molecules/header/index";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import { items } from "./constants/menu";
import { Orders, EditOrder } from "./pages/Order";

function App() {
  return (
    <BrowserRouter>
      <Header items={items} />
      <Switch>
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/edit/:id" element={<EditOrder />} />
        <Route path="*" element={<div>404 not found</div>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
