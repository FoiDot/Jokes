import './_index.scss';

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
export default Switch;
