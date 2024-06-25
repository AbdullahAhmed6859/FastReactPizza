import { createOrder, updateOrder } from "../../services/apiRestaurant";
import { redirect } from "react-router-dom";
import { isValidPhone } from "../../utils/helpers";
import store from "../../store";
import { orderPlaced } from "../cart/cartSlice";

export async function createOrderAction({ request }) {
  // const formData = await request.formData();
  const data = Object.fromEntries(await request.formData());
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      "Please give us your correct phone number. We might need it to contact you";

  if (Object.keys(errors).length > 0) return errors;

  const { id } = await createOrder(order);
  setTimeout(() => store.dispatch(orderPlaced()), 500);
  return redirect(`/order/${id}`);
}

export async function updatePriorityAction({ params }) {
  if (
    confirm(
      "Are you sure you want to make it a priority order? This can upto 20% cost",
    )
  ) {
    const data = { priority: true };
    await updateOrder(params.orderId, data);
  }
  return null;
}
