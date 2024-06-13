import React from 'react'
import ReactDOM from 'react-dom/client'
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
                path: "/confirm-delivery",
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
        path: "/start",
        element: <Start />
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
