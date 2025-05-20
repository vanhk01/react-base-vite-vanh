import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/users",
    element: <div>users page</div>,
  },
  {
    path: "/login",
    element: <div>Login page</div>,
  },
  {
    path: "/register",
    element: <div>register page</div>,
  },
  {
    path: "/products",
    element: <div>products page</div>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
