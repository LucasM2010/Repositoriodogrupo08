import React from 'react';
import * as ReactDOM from "react-dom/client";
import Home from './routes/home';
import Login from './routes/login';
import CadastrarEmpresa from './routes/cadastrarempresa';
import CadastrarOng from './routes/cadastrar-ong';
import TelaDeCadastro from './routes/teladecadastro';
import LinhaDoTempo from './routes/LinhaDoTempo';
import Menssagens from './routes/menssages';
import EmpresasEOngs from './routes/empresaseogns'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./pages.css";
import app from './app';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/cadastrar-empresa",
    element: <CadastrarEmpresa />,
  },
  {
    path: "/cadastrar-ong",
    element: <CadastrarOng />,
  },
  {
    path: "/teladecadastro",
    element: <TelaDeCadastro />,
  },
  {
    path: "/linhadetempo",
    element: <LinhaDoTempo />,
  },
  {
    path: "/menssagens",
    element: <Menssagens />,
  },
  {
    path: "/empresaseongs",
    element: <EmpresasEOngs />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);