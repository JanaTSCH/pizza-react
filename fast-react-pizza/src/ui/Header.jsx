import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between bg-amber-500 uppercase px-4 py-3 sm:px-6 border-b border-stone-200">
      <Link to="/" className="tracking-widest">Fast React Pizza Co.</Link>
      <SearchOrder />
      {/* <p>Jana</p> */}
      <Username />
    </header>
  );
}

export default Header;
