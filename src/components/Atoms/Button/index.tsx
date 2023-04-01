import './_index.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

type Props = {
  label: string;
  onClick?: Function;
  type?: string;
  to?: string;
};

const Button = (props: Props) => {
  const { label, type, onClick, to } = props;
  const isSubmit = type === 'submit';

  if (to) {
    return (
      <Link className='Button-button' to={to}>
        {label}
      </Link>
    );
  }

  return (
    <button className='Button-button' type={isSubmit ? 'submit' : 'button'} onClick={(e: any) => onClick && onClick()}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

Button.defaultProps = {
  label: '',
  type: 'button',
};

export default Button;
