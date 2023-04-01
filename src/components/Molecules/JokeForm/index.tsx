import './_index.scss';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import moment from 'moment';

// Custom components
import Input from 'components/Atoms/Input';
import Button from 'components/Atoms/Button';
import DateTimePicker from 'components/Atoms/DateTimePicker';
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
  isEdit?: boolean;
};

const JokeForm = (props: Props) => {
  const { data: joke, onSubmit, isEdit } = props;

  return (
    <Formik
      //enableReinitialize
      initialValues={{
        Title: isEdit ? joke.Title : '',
        Body: isEdit ? joke.Body : '',
        Author: isEdit ? joke.Author : '',
        Views: isEdit ? joke.Views : '',
        CreatedAt: isEdit
          ? moment(joke.CreatedAt).format('YYYY-MM-DDTHH:mm:ss')
          : moment().format('YYYY-MM-DDTHH:mm:ss'),
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
        <div className='JokerForm-field'>
          <span className='JokerForm-label'>CreatedAt:</span>
          <DateTimePicker name='CreatedAt' />
        </div>

        <Button label='Create' type='submit' />
      </Form>
    </Formik>
  );
};

export default JokeForm;
