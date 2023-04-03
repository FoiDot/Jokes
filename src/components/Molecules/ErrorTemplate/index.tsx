import './_index.scss';

// Custom components
import Icon from 'components/Atoms/Icon';

type Props = {
  message: string;
};

const ErrorTemplate = (props: Props) => {
  const { message } = props;
  return (
    <div className='ErrorTemplate-root'>
      <Icon iconName='FestivalOutlined' className='ErrorTemplate-icon' />
      <span className='ErrorTemplate-message'>{message}</span>
    </div>
  );
};

export default ErrorTemplate;
