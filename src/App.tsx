import { BrowserRouter } from 'react-router-dom';

// Custom components
import Router from 'routes';
import MainStyle from 'layout/MainStyle';
import ScrollToTop from 'utils/components/ScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainStyle>
        <Router />
      </MainStyle>
    </BrowserRouter>
  );
};

export default App;
