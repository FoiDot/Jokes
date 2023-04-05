import * as Muicon from '@mui/icons-material';
import PropTypes from 'prop-types';

interface Props {
  iconName: keyof typeof Muicon;
  className?: string;
  onClick?: Function;
}

const Icon = (props: Props) => {
  const { iconName, onClick, ...rest } = props;

  const IconComponent = iconName && Muicon[iconName];
  return IconComponent && <IconComponent {...rest} onClick={() => onClick && onClick()} />;
};

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Icon.defaultProps = {
  iconName: '',
};

export default Icon;
