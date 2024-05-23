import React from 'react';
import * as ReactDOM from "react-dom/client";
import Home from './routes/home';
import Login from './routes/login';
import CadastrarEmpresa from './routes/cadastrar-empresa';
<<<<<<< HEAD
import CadastrarOng from './routes/cadastrar-ong';
import TelaDeCadastro from './routes/teladecadastro'
=======
import LinhaDoTempo from './routes/linha-do-tempo'; // Importe o novo componente
>>>>>>> 300f35df29dc701a5191b9086ce722a6ce8992b6
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./pages.css";
<<<<<<< HEAD
import LinhaDoTempo from './routes/LinhaDoTempo';
import Menssagens from './routes/menssages';

=======
 
>>>>>>> 300f35df29dc701a5191b9086ce722a6ce8992b6
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
<<<<<<< HEAD
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
=======
    path: "/linha-do-tempo",
    element: <LinhaDoTempo />, // Adicione a nova rota
>>>>>>> 300f35df29dc701a5191b9086ce722a6ce8992b6
  }
]);
 
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
