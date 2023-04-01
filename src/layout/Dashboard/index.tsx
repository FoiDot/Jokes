import { Outlet } from 'react-router-dom';

// Custom components
import Navbar from 'layout/Dashboard/Navbar';
import MarginPage from 'utils/components/MarginPage';

const DashboardLayout = () => {
  return (
    <>
      <Navbar />
      <MarginPage>
        <Outlet />
      </MarginPage>
    </>
  );
};

export default DashboardLayout;
