import './_index.scss';
import { useEffect, useState } from 'react';

// Custom components
import JokesProvider from 'provider/public/jokes';
import Header from 'components/Organisms/List/Header';
import Body from 'components/Organisms/List/Body';
import Navigation from 'components/Organisms/List/Navigation';
import ErrorTemplate from 'components/Molecules/ErrorTemplate';
import CircularLoader from 'components/Atoms/CircularLoader';
import { set, check } from 'utils/componentStatus';

type Params = {
  _limit: string;
  _page: string;
};

const params = {
  _limit: '5',
  _page: '1',
};

const List = () => {
  const [data, setData] = useState<any>([]);
  const [status, setStatus] = useState(set.LOADING);

  useEffect(() => {
    getJokes(params);
  }, []);

  const getJokes = (params: Params) => {
    JokesProvider.getJokes(params)
      .then((response: any) => {
        setData(response);
        setStatus(response.length ? set.OK : set.EMPTY);
      })
      .catch((error: any) => console.error(error));
  };

  const onSubmit = (values: Params) => {
    getJokes(values);
    setStatus(set.LOADING);
  };

  return (
    <div className='List-root'>
      <Header />
      <div className='List-body'>
        {check.ok(status) && <Body data={data} />}
        {check.loading(status) && <CircularLoader />}
        {check.empty(status) && <ErrorTemplate message='Oops! End of the Joke list!' />}
      </div>
      <Navigation onSubmit={onSubmit} />
    </div>
  );
};

export default List;
