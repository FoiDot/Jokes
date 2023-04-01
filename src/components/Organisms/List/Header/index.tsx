import './_index.scss';

// Custom components
import Button from 'components/Atoms/Button';

const ListHeader = () => {
  return (
    <div className='ListHeader-root'>
      <div className='ListHeader-container'>
        <Button label='New' to='/create' />
      </div>
    </div>
  );
};

export default ListHeader;
