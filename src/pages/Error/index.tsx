import './_index.scss';

// Custom components
import ErrorTemplate from 'components/Molecules/ErrorTemplate';
import Button from 'components/Atoms/Button';

const Error = () => {
  return (
    <div className='Error-root'>
      <ErrorTemplate message='Page not found!' />
      <div className='Error-button-container'>
        <Button to='/' label='Go home' />
      </div>
    </div>
  );
};

export default Error;
