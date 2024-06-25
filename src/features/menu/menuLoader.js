import { getMenu } from "../../services/apiRestaurant";

export default async function menuLoader() {
  return await getMenu();
}
