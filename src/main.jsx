import React from 'react';
import * as ReactDOM from "react-dom/client";
import Home from './routes/home';
import Login from './routes/login';
import CadastrarEmpresa from './routes/cadastrar-empresa';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./pages.css";
 
const router = createBrowserRouter([
 
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/cadastrar-empresa", // Adicione a nova rota
    element: <CadastrarEmpresa />,
  }
]);
 
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
