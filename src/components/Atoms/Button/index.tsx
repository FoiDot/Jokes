import './_index.scss';
import { Link } from 'react-router-dom';

type Props = {
  label: string;
  onClick?: Function;
  type?: string;
  to?: string;
  color?: string;
};

const Button = (props: Props) => {
  const { label, type, onClick, to, color } = props;
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
    >
      {label}
    </button>
  );
};

export default Button;
