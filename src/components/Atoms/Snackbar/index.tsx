import './_index.scss';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

// Custom components
import IconButton from '../IconButton';

type Props = {
  message: string;
  type: string;
  open: boolean;
  handleClose: Function;
};

const Snackbar = (props: Props) => {
  const { message, type, open, handleClose } = props;

  const handleType = () => {
    switch (type) {
      case 'Error':
        return 'error';
      default:
        return 'success';
    }
  };

  useEffect(() => {
    if (open) setTimeout(() => handleClose(), 5000);
  }, [open, handleClose]);

  return (
    <>
      {open && (
        <div className={`Snackbar-root ${handleType()}`}>
          <span className='Snackbar-message'>{message}</span>
          <IconButton iconName='CloseOutlined' onClick={handleClose} />
        </div>
      )}
    </>
  );
};

Snackbar.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

Snackbar.defaultProps = {
  name: '',
  type: 'Success',
  open: false,
};

export default Snackbar;
