import './_index.scss';
import PropTypes from 'prop-types';

type Props = {
  checked: boolean;
  handleChange: Function;
};

const Switch = (props: Props) => {
  const { checked, handleChange } = props;

  return (
    <div className='Switch-btn-section'>
      <div className={`Switch-checkbox m-vertical-auto`}>
        <input
          className='Switch-btn__input'
          type='checkbox'
          name='checkbox'
          onChange={(e: any) => handleChange()}
          checked={checked}
        />
        <button type='button' className={`Switch-btn__input-label`} onClick={(e: any) => handleChange()}></button>
      </div>
    </div>
  );
};

Switch.propTypes = {
  checked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
};

Switch.defaultProps = {
  checked: false,
};

export default Switch;
