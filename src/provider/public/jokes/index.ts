import handleCall from '../../client';

type GetJokes = {
  _page: string;
  _limit: string;
};

type Joke = {
  Title: string;
  Body: string;
  Author: string;
  Views: number;
  CreatedAt: string | number;
};

const getJokes = (params: GetJokes) => {
  const call = {
    url: '/jokes/',
    params,
  };
  return handleCall(call);
};

const getJoke = (id: string) => {
  const call = {
    url: `/jokes/${id}`,
  };
  return handleCall(call);
};

const patchJoke = (id: string, data: Joke) => {
  const call = {
    url: `/jokes/${id}`,
    method: 'PATCH',
    data,
  };
  return handleCall(call);
};

const postJoke = (data: Joke) => {
  const call = {
    url: '/jokes/',
    method: 'POST',
    data,
  };
  return handleCall(call);
};

const JokeProvider = {
  getJokes,
  getJoke,
  patchJoke,
  postJoke,
};

export default JokeProvider;
