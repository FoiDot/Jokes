import './_index.scss';
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

export default Input;
