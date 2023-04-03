import './_index.scss';
import PropTypes from 'prop-types';

// Custom components
import OverLay from 'utils/components/Overlay';
import OutsideEvent from 'utils/components/OutsideEvent';
import IconButton from '../IconButton';

type Props = {
  children: JSX.Element;
  open: boolean;
  handleOpen: Function;
  title: string;
  isSticky?: boolean;
};

const Modal = (props: Props) => {
  const { children, open, handleOpen, title, isSticky } = props;

  return (
    <>
      {open && (
        <OverLay>
          <div className='Modal-root'>
            <OutsideEvent onEvent={() => !isSticky && handleOpen(false)}>
              <div className='Modal-container'>
                <div className='Modal-header'>
                  {!isSticky && (
                    <div className='Modal-closeIcon'>
                      <IconButton iconName='CloseOutlined' onClick={() => handleOpen(false)} />
                    </div>
                  )}
                  {title && <span className='Modal-title'>{title}</span>}
                </div>
                {children}
              </div>
            </OutsideEvent>
          </div>
        </OverLay>
      )}
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleOpen: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

Modal.defaultProps = {
  open: false,
  title: '',
};

export default Modal;
