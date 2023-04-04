import './_index.scss';
import { Formik, Form } from 'formik';
import moment from 'moment';

// Custom components
import Input from 'components/Atoms/Input';
import Button from 'components/Atoms/Button';
import DateTimePicker from 'components/Atoms/DateTimePicker';
import JokeSchema from 'schemas/jokeShema';

type Joke = {
  id: number;
  Title: string;
  Body: string;
  Author: string;
  Views: number;
  CreatedAt: number;
};

type Props = {
  onSubmit: Function;
  data?: Joke;
};

const JokeForm = (props: Props) => {
  const { data: joke, onSubmit } = props;

  return (
    <Formik
      enableReinitialize
      validateOnMount
      initialValues={{
        Title: joke ? joke.Title : '',
        Body: joke ? joke.Body : '',
        Author: joke ? joke.Author : '',
        Views: joke ? joke.Views : '',
        CreatedAt: joke ? moment(joke.CreatedAt).format('YYYY-MM-DDTHH:mm:ss') : moment().format('YYYY-MM-DDTHH:mm:ss'),
      }}
      validationSchema={JokeSchema}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values);
        setSubmitting(false);
      }}
    >
      {({ isValid }) => (
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
          <div className='JokerForm-field'>
            <span className='JokerForm-label'>CreatedAt:</span>
            <DateTimePicker name='CreatedAt' />
          </div>

          <Button label={joke ? 'Save' : 'Create'} type='submit' color='success' disabled={!isValid} />
        </Form>
      )}
    </Formik>
  );
};

export default JokeForm;
