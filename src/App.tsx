import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

// Custom components
import Router from 'routes';
import MainStyle from 'layout/MainStyle';
import ScrollToTop from 'utils/components/ScrollToTop';
import { ThemeContext } from 'context/themeContext';

const App = () => {
  const isBrowserDefaulDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

  const getDefaultTheme = (): string => {
    const localStorageTheme = localStorage.getItem('theme');
    const browserDefault = isBrowserDefaulDark() ? 'dark' : 'light';
    return localStorageTheme || browserDefault;
  };

  const [theme, setTheme] = useState(getDefaultTheme());

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`} style={{ height: '100%' }}>
        <BrowserRouter>
          <ScrollToTop />
          <MainStyle>
            <Router />
          </MainStyle>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
