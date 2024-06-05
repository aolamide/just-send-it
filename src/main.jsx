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


const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/home",
                element: <Home />,
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
            }
        ]
    },
    {
        path: "/",
        element: <App />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
