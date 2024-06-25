import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="border-b-3 flex items-center justify-between border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6 md:grid md:grid-cols-3">
      <Link to="/" className="font-medium tracking-widest">
        Fast React Pizza Co.
      </Link>

      <SearchOrder />

      <Username />
    </header>
  );
}

export default Header;
