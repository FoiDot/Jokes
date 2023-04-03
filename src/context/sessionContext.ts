import { createContext } from 'react';

export const SessionContext = createContext({
  token: '',
  setToken: (token: string) => {},
});
