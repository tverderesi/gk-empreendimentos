import { BaseLayout } from './components/layout/BaseLayout';
import Home from './components/layout/Home';
import ClientHome from './components/layout/ClientHome';
import { AppProvider } from './context/AppContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BuildingLayout } from './components/layout/BuildingLayout';

import Lollygagging from './components/Lollygagging';

const host = window.location.host;
const subdomain = host.split('.')[0];

const router = createBrowserRouter([
  {
    path: '/',
    element: subdomain === 'tabelas' ? <Home /> : <ClientHome />,
  },
  {
    path: '/:menuLinks',
    element: (
      <BuildingLayout>
        <Lollygagging param={window.location.pathname.split('/')} />
      </BuildingLayout>
    ),
  },
  { path: '/tabelas', element: <Home /> },
]);

function App() {
  return (
    <>
      <AppProvider>
        <BaseLayout>
          <>
            <RouterProvider router={router} />
          </>
        </BaseLayout>
      </AppProvider>
    </>
  );
}

export default App;
