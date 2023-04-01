import './_index.scss';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';

// Custom components
import Input from 'components/Atoms/Input';
import Button from 'components/Atoms/Button';
import JokeSchema from 'schemas/jokerShema';

type Joke = {
  id: number;
  Title: string;
  Body: string;
  Author: string;
  Views: number;
  CreatedAt: number;
};

type Props = {
  data: Joke;
  onSubmit: Function;
};

const JokeForm = (props: Props) => {
  const { data: joke, onSubmit } = props;

  console.log(joke);

  return (
    <Formik
      //enableReinitialize
      initialValues={{
        Title: joke.Title,
        Body: joke.Body,
        Author: joke.Author,
        Views: joke.Views,
      }}
      validationSchema={JokeSchema}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values);
        setSubmitting(false);
      }}
    >
      <Form className='JokerForm-root'>
        <div className='JokerForm-field'>
          <span className='JokerForm-label'>Title:</span>
          <Input name='Title' />
        </div>
        <div className='JokerForm-field'>
          <span className='JokerForm-label'>Body:</span>
          <Input name='Body' />
        </div>
        <div className='JokerForm-field'>
          <span className='JokerForm-label'>Author:</span>
          <Input name='Author' />
        </div>
        <div className='JokerForm-field'>
          <span className='JokerForm-label'>Views:</span>
          <Input name='Views' />
        </div>

        <Button label='Create' type='submit' />
      </Form>
    </Formik>
  );
};

export default JokeForm;
