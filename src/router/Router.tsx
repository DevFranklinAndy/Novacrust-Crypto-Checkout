import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ConfirmationPage from "../pages/ConfirmationPage";
import CryptoPage from "../pages/CryptoPage";
import RecipientDetailPage from "../pages/RecipientDetailPage";
import SendEthPage from "../pages/SendEthPage";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <RecipientDetailPage />,
      },
      { path: "/crypto", element: <CryptoPage /> },
      { path: "/send-eth", element: <SendEthPage /> },
      { path: "/confirm", element: <ConfirmationPage /> },
    ],
  },
]);
