//import './_index.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';

// Custom components
import Header from 'components/Organisms/Create/Header';
import Body from 'components/Molecules/JokeForm';
import JokesProvider from 'provider/public/jokes';

type Joke = {
  Title: string;
  Body: string;
  Author: string;
  Views: number;
  CreatedAt: string | number;
};

const Create = () => {
  const postJoke = (values: Joke) => {
    JokesProvider.postJoke(values)
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
    postJoke(data);
  };

  return (
    <div className='Create-root'>
      <Header />
      <Body onSubmit={onSubmit} />
    </div>
  );
};

export default Create;
