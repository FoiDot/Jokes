import './_index.scss';
import PropTypes from 'prop-types';
import { useField } from 'formik';

type Params = {
  name: string;
  type?: string;
};

const Input = (props: Params) => {
  const { name, ...rest } = props;
  const [field, meta] = useField(props);
  const error = meta.touched && meta.error;

  return (
    <>
      <div className='Input-root'>
        <input id={name} className='Input' {...field} {...rest} autoComplete='off' />
      </div>
      {error && <span className='Input-error'>{error}</span>}
    </>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Input.defaultProps = {
  name: '',
};

export default Input;
