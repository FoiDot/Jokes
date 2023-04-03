import './_index.scss';

// Custom components
import Button from 'components/Atoms/Button';

type Props = {
  handleDelete: Function;
};

const EditHeader = (props: Props) => {
  const { handleDelete } = props;

  return (
    <div className='EditHeader-root'>
      <div className='EditHeader-container'>
        <Button label='Back' to='/' />
      </div>
      <div className='EditHeader-container'>
        <Button label='Delete' color='delete' onClick={handleDelete} />
      </div>
    </div>
  );
};

export default EditHeader;
