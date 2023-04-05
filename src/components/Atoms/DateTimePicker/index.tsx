import './_index.scss';
import PropTypes from 'prop-types';
import { useField } from 'formik';

type Params = {
  name: string;
};

const DateTimePicker = (props: Params) => {
  const { name, ...rest } = props;
  const [field, meta] = useField(props);
  const error = meta.touched && meta.error;

  return (
    <>
      <div className='DateTimePicker-root'>
        <input id={name} className='DateTimePicker' type='datetime-local' autoComplete='off' {...field} {...rest} />
      </div>
      {error && <span className='DateTimePicker-error'>{error}</span>}
    </>
  );
};

DateTimePicker.propTypes = {
  name: PropTypes.string.isRequired,
};

DateTimePicker.defaultProps = {
  name: '',
};

export default DateTimePicker;
