import PropTypes from 'prop-types';
import * as Muicon from '@mui/icons-material';

interface Props {
  iconName: keyof typeof Muicon;
  className?: string;
}

const Icon = (props: Props) => {
  const { iconName, ...rest } = props;

  const IconComponent = iconName && Muicon[iconName];
  return IconComponent && <IconComponent {...rest} />;
};

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
};

Icon.defaultProps = {
  iconName: 'CircleOutlined',
};

export default Icon;
