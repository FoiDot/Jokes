//import './_index.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';

// Custom components
import JokesProvider from 'provider/public/jokes';
import Body from 'components/Molecules/JokeForm';
import Header from 'components/Organisms/Edit/Header';

type Joke = {
  Title: string;
  Body: string;
  Author: string;
  Views: number;
  CreatedAt: string | number;
};

const Edit = () => {
  const [data, setData] = useState<any>({});
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const { id = '' } = useParams();

  useEffect(() => {
    if (id) getJoke(id);
  }, [id]);

  const getJoke = (id: string) => {
    JokesProvider.getJoke(id)
      .then((response: any) => {
        setData(response);
        setIsLoaded(true);
      })
      .catch((error: any) => console.error(error));
  };

  const patchJoke = (values: Joke) => {
    JokesProvider.patchJoke(id, values)
      .then((response: any) => {
        console.log(response);
      })
      .catch((error: any) => console.error(error));
  };

  const onSubmit = (values: Joke) => {
    const { CreatedAt, ...rest } = values;
    const data = {
      CreatedAt: parseInt(moment(CreatedAt).format('x')),
      ...rest,
    };
    patchJoke(data);
  };

  return (
    <div className='Edit-root'>
      <Header id={id} />
      {isLoaded && <Body data={data} onSubmit={onSubmit} isEdit />}
    </div>
  );
};

export default Edit;
