import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import router from './routers/router';

// Cria a raiz e renderiza o aplicativo
const root = createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router} />
);