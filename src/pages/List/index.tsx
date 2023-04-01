import './_index.scss';
import { useEffect, useState } from 'react';

// Custom components
import JokesProvider from 'provider/public/jokes';
import Header from 'components/Organisms/List/Header';
import Body from 'components/Organisms/List/Body';
import Navigation from 'components/Organisms/List/Navigation';

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

  useEffect(() => {
    getJokes(params);
  }, []);

  const getJokes = (params: Params) => {
    JokesProvider.getJokes(params)
      .then((response: any) => {
        setData(response);
      })
      .catch((error: any) => console.error(error));
  };

  const onSubmit = (values: Params) => {
    getJokes(values);
  };

  return (
    <div className='List-root'>
      <Header />
      <Body data={data} />
      <Navigation onSubmit={onSubmit} />
    </div>
  );
};

export default List;
