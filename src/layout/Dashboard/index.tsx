import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

// Custom components
import Navbar from 'layout/Dashboard/Navbar';
import MarginPage from 'utils/components/MarginPage';
import { SessionContext } from 'context/sessionContext';
import LoginProvider from 'provider/private/login';

const DashboardLayout = () => {
  const [token, setToken] = useState('');

  const getUser = () => {
    LoginProvider.getUser()
      .then((response: any) => setToken(response))
      .catch((error: any) => console.error(error));
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <SessionContext.Provider value={{ token, setToken }}>
      <Navbar />
      <MarginPage>
        <Outlet />
      </MarginPage>
    </SessionContext.Provider>
  );
};

export default DashboardLayout;
