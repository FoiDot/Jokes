import './_index.scss';
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

  const handleIcon = () => {
    return 'CloseOutlined';
  };

  useEffect(() => {
    if (open) handleTimer();
  }, [open]);

  const handleTimer = () => setTimeout(() => handleClose(), 5000);

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

export default Snackbar;
