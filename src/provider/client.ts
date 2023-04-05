import axios from 'axios';
import { parseLinkHeader } from '@web3-storage/parse-link-header';

const client = axios.create({
  baseURL: `${process.env.REACT_APP_API}`,
  timeout: 15000,
});

const checkPagination = (response: any) => {
  if (response?.headers?.link) {
    try {
      console.log('aca1');
      const count = parseLinkHeader(response.headers.link)?.last?._page;
      console.log('aca2');
      const data = {
        data: response.data,
        count: parseInt(count || ''),
      };
      console.log('aca3');
      console.log(data);
      console.log('aca4');
      response.data = data;
    } catch (error) {
      console.log(error);
    }
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
