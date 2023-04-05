import './_index.scss';
import PropTypes from 'prop-types';
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

IconButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

IconButton.defaultProps = {
  iconName: '',
};

export default IconButton;
