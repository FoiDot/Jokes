import * as Yup from 'yup';

const JokeSchema = () => {
  return Yup.object({
    Title: Yup.string().required('Title is required.'),
    Body: Yup.string().required('Body is required.'),
    Author: Yup.string().email('Author must be a valid email.').required('Author is required.'),
    Views: Yup.number()
      .typeError('Views must be a number.')
      .min(0, 'Views must be greater than 0.')
      .required('Views is required.'),
    CreatedAt: Yup.date().required('CreatedAt is required.'),
  });
};

export default JokeSchema;
