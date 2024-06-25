// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  const navigate = useNavigate();
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">Back to menu</LinkButton>
      <div className="text-center">
        <p className="mb-5 mt-7 font-semibold">
          Your cart is still empty. Start adding some pizzas :)
        </p>
        <Button type="primary" onClick={() => navigate("/menu")}>
          Start ordering
        </Button>
      </div>
    </div>
  );
}

export default EmptyCart;
