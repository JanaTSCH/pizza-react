import Header from "./Header";
import CartOverView from "../features/cart/CartOverView";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <Header />
      <main>
        <h1>Content</h1>
        <Outlet />
      </main>
      <CartOverView />
    </div>
  );
}

export default AppLayout;
