import './_index.scss';
import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

// Custom components
import Switch from 'components/Atoms/Switch';
import Icon from 'components/Atoms/Icon';
import { ThemeContext } from 'context/theme-context';

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
    localStorage.setItem('theme', isCurrentDark ? 'light' : 'dark');
  };

  return (
    <header className='Navbar-root'>
      <h3>Header</h3>
      <div className='Navbar-switch-container'>
        <Icon iconName='DarkModeOutlined' className='Navbar-icon' />
        <Switch handleChange={handleThemeChange} checked={theme === 'light'} />
        <Icon iconName='WbSunnyOutlined' className='Navbar-icon' />
      </div>
    </header>
  );
};
export default Navbar;
