import './_index.scss';
import * as Muicon from '@mui/icons-material';

// Custom Components
import Icon from 'components/Atoms/Icon';

type Props = {
  iconName: keyof typeof Muicon;
  onClick: Function;
};

const IconButton = (props: Props) => {
  const { iconName, onClick } = props;

  return (
    <button className='IconButton-button' type='button'>
      <Icon iconName={iconName} className='IconButton-icon' onClick={onClick} />
    </button>
  );
};

export default IconButton;
