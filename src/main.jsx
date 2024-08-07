import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import store from "./app/store";
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from "./pages/Home.jsx";
import PackageRequestHome from "./pages/PackageRequestHome.jsx";
import Layout from "./components/Layout.jsx";
import PackageRequestDestinationForm from "./pages/PackageRequestDestinationForm.jsx";
import PackageRequestPickupForm from "./pages/PackageRequestPickupForm.jsx";
import MyDeliveries from "./pages/MyDeliveries.jsx";
import DeliveryDetails from "./pages/DeliveryDetails.jsx";
import Login from "./pages/Login.jsx";
import Start from "./pages/Start.jsx";
import SettingsPage from "./pages/Settings.jsx";
import ConfirmDelivery from "./pages/ConfirmDelivery.jsx";
import {Toaster} from "react-hot-toast";
import PaymentCallback from "./pages/PaymentCallback.jsx";
import Register from "./pages/Register.jsx";


const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/settings",
                element: <SettingsPage />,
            },
            {
                path: "/confirm-delivery/:deliveryId",
                element: <ConfirmDelivery />,
            },
            {
                path: "send-package",
                children: [
                    {
                        path: "", element: <PackageRequestHome />
                    },
                    {
                        path: "destination", element: <PackageRequestDestinationForm />
                    },
                    {
                        path: "pickup", element: <PackageRequestPickupForm />
                    }
                ]
            },
            {
                path: "my-deliveries",
                children: [
                    {
                        path: "", element: <MyDeliveries />
                    },
                    {
                        path: ":deliveryId", element: <DeliveryDetails />
                    }
                ]
            }
        ]
    },
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/start",
        element: <Start />
    },
    {
        path: "/payment-callback",
        element: <PaymentCallback />
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
        <Toaster position="top-center" />
      </Provider>
  </React.StrictMode>,
)
