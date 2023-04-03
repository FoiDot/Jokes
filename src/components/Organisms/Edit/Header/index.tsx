import './_index.scss';

// Custom components
import Button from 'components/Atoms/Button';

type Props = {
  id: string;
};

const EditHeader = (props: Props) => {
  return (
    <div className='EditHeader-root'>
      <div className='EditHeader-container'>
        <Button label='Back' to='/' />
      </div>
      <div className='EditHeader-container'>
        <Button label='Delete' color='delete' />
      </div>
    </div>
  );
};

export default EditHeader;
