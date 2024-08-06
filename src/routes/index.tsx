import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";

import { Layout } from "@/components/features/Layout";
import { CategoryPage } from "@/pages/Category";
import { GoodsDetailPage } from "@/pages/Goods/Detail";
import { HomePage } from "@/pages/Home";
import { LoginPage } from "@/pages/Login";
import { RegisterPage } from "@/pages/Register";
import { MyAccountPage } from "@/pages/MyAccount";
import { OrderPage } from "@/pages/Order";
import { AdminPage } from "@/pages/Admin";

import { PrivateRoute } from "./components/PrivateRoute";
import { RouterPath } from "./path";

const router = createBrowserRouter([
  {
    path: RouterPath.root,
    element: <Layout />,
    children: [
      {
        path: RouterPath.home,
        element: <HomePage />,
      },
      {
        path: RouterPath.admin,
        element: <AdminPage />,
      },
      {
        path: RouterPath.category,
        element: <CategoryPage />,
      },
      {
        path: RouterPath.productsDetail,
        element: <GoodsDetailPage />,
      },
      {
        path: RouterPath.myAccount,
        element: <PrivateRoute />,
        children: [
          {
            path: RouterPath.myAccount,
            element: <MyAccountPage />,
          },
        ],
      },
      {
        path: RouterPath.order,
        element: <PrivateRoute />,
        children: [
          {
            path: RouterPath.order,
            element: <OrderPage />,
          },
        ],
      },
      {
        path: RouterPath.notFound,
        element: <Navigate to={RouterPath.home} />,
      },
    ],
  },
  {
    path: RouterPath.login,
    element: <LoginPage />,
  },
  {
    path: RouterPath.register,
    element: <RegisterPage />,
  },
]);

export const Routes = () => {
  return (
    <BrowserRouter basename="/react-deploy">
      <RouterProvider router={router} />
    </BrowserRouter>
  );
};
