import { Navigate, useRoutes } from 'react-router-dom';

// Custom components
import DashboardLayout from 'layout/Dashboard';

// Pages
import List from 'pages/List';
import Edit from 'pages/Edit';
import Create from 'pages/Create';

const Router: React.FC = (): JSX.Element => {
  const routes = useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { path: '/', element: <List /> },
        { path: 'list', element: <Navigate to='/' replace /> },
        { path: 'edit/:id', element: <Edit /> },
        { path: 'create', element: <Create /> },
      ],
    },
    { path: '*', element: <h1>Bad</h1> },
  ]);

  return <>{routes}</>;
};

export default Router;
