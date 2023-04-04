import './_index.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';

// Custom components
import JokesProvider from 'provider/public/jokes';
import Body from 'components/Molecules/Formik/JokeForm';
import Header from 'components/Organisms/Edit/Header';
import CircularLoader from 'components/Atoms/CircularLoader';
import ErrorTemplate from 'components/Molecules/ErrorTemplate';
import { set, check } from 'utils/componentStatus';

type Joke = {
  Title: string;
  Body: string;
  Author: string;
  Views: number;
  CreatedAt: string | number;
};

const Edit = () => {
  const [data, setData] = useState<any>({});
  const [status, setStatus] = useState(set.LOADING);

  const { id = '' } = useParams();

  useEffect(() => {
    if (id) getJoke(id);
  }, [id]);

  const getJoke = (id: string) => {
    JokesProvider.getJoke(id)
      .then((response: any) => {
        setData(response);
        setStatus(set.OK);
      })
      .catch((error: any) => {
        setStatus(set.ERROR);
      });
  };

  const patchJoke = (values: Joke) => {
    JokesProvider.patchJoke(id, values)
      .then((response: any) => {
        console.log(response);
      })
      .catch((error: any) => console.error(error));
  };

  const deleteJoke = (id: string) => {
    JokesProvider.deleteJoke(id)
      .then((response: any) => setStatus(set.EMPTY))
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

  const handleDelete = () => deleteJoke(id);

  return (
    <div>
      <Header handleDelete={handleDelete} hideDelete={check.empty(status) || check.error(status)} />
      {check.loading(status) && (
        <div className='Edit-root'>
          <CircularLoader />
        </div>
      )}
      {check.ok(status) && <Body data={data} onSubmit={onSubmit} />}
      {check.empty(status) && <ErrorTemplate message='Oops! This joke was deleted!' />}
      {check.error(status) && <ErrorTemplate message='Oops! This joke do not exist!' />}
    </div>
  );
};

export default Edit;
