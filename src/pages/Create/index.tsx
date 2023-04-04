import { useState } from 'react';
import moment from 'moment';

// Custom components
import Header from 'components/Organisms/Create/Header';
import Body from 'components/Molecules/Formik/JokeForm';
import Snackbar from 'components/Atoms/Snackbar';
import JokesProvider from 'provider/public/jokes';

type Joke = {
  Title: string;
  Body: string;
  Author: string;
  Views: number;
  CreatedAt: string | number;
};

type Snack = {
  message: string;
  open: boolean;
  type: string;
};

const snackSuccess = {
  open: true,
  type: 'Success',
  message: 'Joke was created!',
};

const Create = () => {
  const [snack, setSnack] = useState<Snack>({ open: false, type: '', message: '' });

  const postJoke = (values: Joke) => {
    JokesProvider.postJoke(values)
      .then((response: any) => setSnack(snackSuccess))
      .catch((error: any) => console.error(error));
  };

  const onSubmit = (values: Joke) => {
    const { CreatedAt, ...rest } = values;
    const data = {
      CreatedAt: parseInt(moment(CreatedAt).format('x')),
      ...rest,
    };
    postJoke(data);
  };

  const handleClose = () => setSnack({ ...snack, open: false });

  return (
    <div className='Create-root'>
      <Header />
      <Body onSubmit={onSubmit} />
      <Snackbar message={snack.message} type={snack.type} open={snack.open} handleClose={handleClose} />
    </div>
  );
};

export default Create;
