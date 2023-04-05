import axios from 'axios';
import { parseLinkHeader } from '@web3-storage/parse-link-header';

const client = axios.create({
  baseURL: `${process.env.REACT_APP_API}`,
  timeout: 15000,
});

const checkPagination = (response: any) => {
  if (response?.headers?.link) {
    try {
      const count = parseLinkHeader(response.headers.link)?.last?._page;
      const data = {
        data: response.data,
        count: parseInt(count || ''),
      };
      response.data = data;
    } catch (error) {}
  }
  return response.data;
};

const handleCall = (options: any) => {
  return new Promise((resolve, reject) => {
    try {
      options.headers = {
        'Content-Type': 'application/json',
      };

      client(options)
        .then(response => {
          const data = checkPagination(response);
          resolve(data);
        })
        .catch(error => reject(error));
    } catch (error) {
      reject(error);
    }
  });
};

export default handleCall;
