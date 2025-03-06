import Header from "./Header";
import CartOverView from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className=" grid h-screen grid-rows-[auto_1fr_auto]
     bg-stone-200">
      {isLoading && <Loader />}
      
      <Header />
      <div className="overflow-scroll">
        <main className="max-w-3xl mx-auto">
          <h1></h1>
          <Outlet />
      </main> 
      </div>
      
      <CartOverView />
    </div>
  );
}

export default AppLayout;
