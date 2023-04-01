import { Navigate, useRoutes } from 'react-router-dom';

// Custom components
import DashboardLayout from 'layout/Dashboard';

// Pages
import List from 'pages/List';

const Router: React.FC = (): JSX.Element => {
  const routes = useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [{ path: '/', element: <List /> }],
    },
    { path: '*', element: <h1>Bad</h1> },
  ]);

  return <>{routes}</>;
};

export default Router;

/*
const Routefr = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { path: '/', element: <Navigate to='/search' replace /> },
        { path: 'search', element: <Search /> },
        { path: ':section', element: <Section /> },
        { path: ':section/:category', element: <Category /> },
        { path: 'product/:sku', element: <Product /> },
        { path: 'cart', element: <Cart /> },
      ],
    },
    { path: '*', element: <h1>Bad</h1> },
  ]);

  return routes;
};
*/
