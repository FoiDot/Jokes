import * as Muicon from '@mui/icons-material';

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

export default Icon;
