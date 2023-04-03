import { account } from 'dump/user';

const secretToken = process.env.REACT_APP_TOKEN || '';

type User = {
  email: string;
  password: string;
};

const getUser = () => {
  return new Promise((resolve, reject) => {
    try {
      const localStoragetoken = localStorage.getItem('token');
      if (localStoragetoken === secretToken) resolve(secretToken);
      else reject('Invalid token');
    } catch (error) {
      reject(error);
    }
  });
};

const postUser = (values: User) => {
  return new Promise((resolve, reject) => {
    try {
      if (values.email === account.email && values.password === account.password) {
        localStorage.setItem('token', secretToken);
        resolve(secretToken);
      } else reject('Invalid user');
    } catch (error) {
      reject(error);
    }
  });
};

const deleteUser = () => {
  return new Promise((resolve, reject) => {
    try {
      localStorage.removeItem('token');
      resolve('');
    } catch (error) {
      reject(error);
    }
  });
};

const LoginProvider = {
  getUser,
  postUser,
  deleteUser,
};

export default LoginProvider;
