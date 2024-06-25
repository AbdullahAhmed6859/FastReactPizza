import { lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import Error from "./ui/Error";

const Menu = lazy(() => import("./features/menu/Menu"));
const Cart = lazy(() => import("./features/cart/Cart"));
const CreateOrder = lazy(() => import("./features/order/CreateOrder"));
const Order = lazy(() => import("./features/order/Order"));

import menuLoader from "./features/menu/menuLoader";
import {
  createOrderAction,
  updatePriorityAction,
} from "./features/order/orderActions";
import orderLoader from "./features/order/orderLoader";
import Loader from "./ui/Loader";
import store from "./store";
import { saveState } from "./localStorage";

store.subscribe(() => {
  saveState({
    cart: store.getState().cart,
    user: store.getState().user,
  });
});

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/menu",
        element: (
          <Suspense fallback={<Loader />}>
            <Menu />
          </Suspense>
        ),
        loader: menuLoader, // Assuming you have a loader function for menu data
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart /> },
      {
        path: "/order/new",
        element: (
          <Suspense fallback={<Loader />}>
            <CreateOrder />
          </Suspense>
        ),
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: (
          <Suspense fallback={<Loader />}>
            <Order />
          </Suspense>
        ),
        loader: orderLoader, // Assuming you have a loader function for order data
        errorElement: <Error />,
        action: updatePriorityAction,
      },
    ],
  },
]);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
