import handleCall from '../../client';

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

const CategoriesProvider = {
  getJokes,
};

export default CategoriesProvider;
