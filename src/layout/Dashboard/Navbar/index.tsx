import './_index.scss';
import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

// Custom components
import Switch from 'components/Atoms/Switch';
import Icon from 'components/Atoms/Icon';
import Modal from 'components/Atoms/Modal';
import Button from 'components/Atoms/Button';
import LoginForm from 'components/Molecules/Formik/LoginForm';
import LoginProvider from 'provider/private/login';
import { ThemeContext } from 'context/themeContext';
import { SessionContext } from 'context/sessionContext';

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { token, setToken } = useContext(SessionContext);
  const [openLoginModal, setOpenLoginModal] = useState(true);

  const handleThemeChange = () => {
    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
    localStorage.setItem('theme', isCurrentDark ? 'light' : 'dark');
  };

  const handleLogout = () => {
    LoginProvider.deleteUser()
      .then((response: any) => setToken(response))
      .catch((error: any) => console.error(error));
  };

  return (
    <>
      <header className='Navbar-root'>
        <div className='Navbar-logout'>{token && <Button label='Logout' onClick={handleLogout} />}</div>
        <div className='Navbar-switch-container'>
          <Icon iconName='DarkModeOutlined' className='Navbar-icon' />
          <Switch handleChange={handleThemeChange} checked={theme === 'light'} />
          <Icon iconName='WbSunnyOutlined' className='Navbar-icon' />
        </div>
      </header>
      {!token && (
        <Modal open={openLoginModal} handleOpen={setOpenLoginModal} title='Login' isSticky>
          <LoginForm />
        </Modal>
      )}
    </>
  );
};
export default Navbar;
