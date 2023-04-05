import './_index.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

type Props = {
  label: string;
  onClick?: Function;
  type?: string;
  to?: string;
  color?: string;
  disabled?: boolean;
};

const Button = (props: Props) => {
  const { label, type, onClick, to, color, disabled } = props;
  const isSubmit = type === 'submit';

  if (to) {
    return (
      <Link className='Button-button' to={to}>
        {label}
      </Link>
    );
  }

  return (
    <button
      className={`Button-button ${color}`}
      type={isSubmit ? 'submit' : 'button'}
      onClick={(e: any) => onClick && onClick()}
      disabled={!!disabled}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  to: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  label: '',
  type: 'button',
};

export default Button;
