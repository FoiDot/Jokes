import axios from 'axios';

const client = axios.create({
  baseURL: `${process.env.REACT_APP_API}`,
  timeout: 15000,
});

const handleCall = (options: any) => {
  return new Promise((resolve, reject) => {
    try {
      options.headers = {
        'Content-Type': 'application/json',
      };

      client(options)
        .then(data => resolve(data.data))
        .catch(error => reject(error));
    } catch (error) {
      reject(error);
    }
  });
};

export default handleCall;
