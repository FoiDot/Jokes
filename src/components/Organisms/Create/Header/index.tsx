import './_index.scss';

// Custom components
import Button from 'components/Atoms/Button';

const CreateHeader = () => {
  return (
    <div className='CreateHeader-root'>
      <div className='CreateHeader-container'>
        <Button label='Back' to='/' />
      </div>
    </div>
  );
};

export default CreateHeader;
