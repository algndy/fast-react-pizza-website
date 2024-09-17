import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";
function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 sm:px-6 ">
      <Link className="tracking-widest " to="/">
        Fast React Pizza.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
