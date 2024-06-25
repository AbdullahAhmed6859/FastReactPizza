import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";

// eslint-disable-next-line react/prop-types
function UpdateOrder({ order }) {
  console.log(order);
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;
