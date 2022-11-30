import Home from './components/layout/Home';
import ClientHome from './components/layout/ClientHome';
import { AppProvider } from './context/AppContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Building from './components/routes/Building';

const host = window.location.host;
const subdomain = host.split('.')[0];

const router = createBrowserRouter([
  {
    path: '/',
    element: subdomain === 'tabelas' ? <Home /> : <ClientHome />,
  },
  {
    path: '/:menuLinks',
    element: <Building param={window.location.pathname.slice(1)} />,
  },
  {
    path: '/tabelas',
    element: <Home />,
  },
]);

function App() {
  return (
    <>
      <AppProvider>
        <>
          <RouterProvider router={router} />
        </>
      </AppProvider>
    </>
  );
}

export default App;
