import handleCall from '../../client';
import { Joke } from 'types';

type GetJokes = {
  _page: string;
  _limit: string;
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

const deleteJoke = (id: string) => {
  const call = {
    url: `/jokes/${id}`,
    method: 'DELETE',
  };
  return handleCall(call);
};

const JokeProvider = {
  getJokes,
  getJoke,
  patchJoke,
  postJoke,
  deleteJoke,
};

export default JokeProvider;
