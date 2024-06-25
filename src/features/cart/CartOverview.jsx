import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getNumPizzas, getTotalCartPrice } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const numPizzas = useSelector(getNumPizzas);
  const price = useSelector(getTotalCartPrice);

  if (!numPizzas) return null;
  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{numPizzas} pizzas</span>
        <span>{formatCurrency(price)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
