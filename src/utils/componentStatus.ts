const LOADING = 'LOADING';
const EMPTY = 'EMPTY';
const OK = 'OK';
const ERROR = 'ERROR';

const loading = (status: string) => status === LOADING;
const empty = (status: string) => status === EMPTY;
const ok = (status: string) => status === OK;
const error = (status: string) => status === ERROR;

export const check = {
  loading,
  empty,
  ok,
  error,
};

export const set = {
  LOADING,
  EMPTY,
  OK,
  ERROR,
};
