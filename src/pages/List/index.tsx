import './_index.scss';
import { useEffect, useState } from 'react';

// Custom components
import JokesProvider from 'provider/public/jokes';
import Body from 'components/Organism/List/Body';
import Navigation from 'components/Organism/List/Navigation';

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
      <Body data={data} />
      <Navigation onSubmit={onSubmit} />
    </div>
  );
};

export default List;
