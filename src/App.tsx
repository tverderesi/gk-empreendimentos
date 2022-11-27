import { BackgroundImage } from './components/atoms/BackgroundImage';
import { BaseLayout } from './components/layout/BaseLayout';
import Home from './components/layout/Home';
import ClientHome from './components/layout/ClientHome';
import { AppProvider } from './context/AppContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const host = window.location.host;
const subdomain = host.split('.')[0];
console.log(host);
const router = createBrowserRouter([
  {
    path: '/',
    element: subdomain === 'tabelas' ? <Home /> : <ClientHome />,
  },
  { path: '/:menuLinks', element: <App /> },
]);

function App() {
  return (
    <>
      <AppProvider>
        <BaseLayout>
          <>
            <RouterProvider router={router} />
            <BackgroundImage />
          </>
        </BaseLayout>
      </AppProvider>
    </>
  );
}

export default App;
