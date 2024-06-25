import { getOrder } from "../../services/apiRestaurant";

export default async function orderLoader({ params }) {
  return await getOrder(params.orderId);
}
