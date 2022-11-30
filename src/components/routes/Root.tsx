import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ClientHome from '../layout/ClientHome';
import Home from '../layout/Home';
import Building from './Building';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
const host = window.location.host;
const subdomain = host.split('.')[0];

export default function Root() {
  const { link } = useContext(AppContext);
  const param = link ? link : window.location.pathname?.slice(1);
  const router = createBrowserRouter([
    {
      path: '/',
      element: subdomain === 'tabelas' ? <Home /> : <ClientHome />,
    },
    {
      path: '/:menuLinks',
      element: <Building param={param} />,
    },
    {
      path: '/tabelas',
      element: <Home />,
    },
  ]);
  return <RouterProvider router={router} />;
}
