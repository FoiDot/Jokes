import moment from 'moment';

export const toDate = (date: number) => moment(date).format('DD MMM YYYY');

export const toEmail = (email: string) => {
  const regex = /@[a-zA-Z0-9._-]+\./;
  return email.replace(regex, '@***.');
};
