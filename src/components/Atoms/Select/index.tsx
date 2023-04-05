import './_index.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useFormikContext } from 'formik';

// Custom Components
import Icon from 'components/Atoms/Icon';
import OutsideEvent from 'utils/components/OutsideEvent';

type Props = {
  name: string;
  options: Array<Option>;
};

type Option = {
  label: string;
  value: string;
};

const Select = (props: Props) => {
  const { name, options } = props;
  const { values, setFieldValue } = useFormikContext<any>();
  const { [name]: selected } = values;

  const [open, setOpen] = useState(false);

  const onSelect = (value: string) => {
    setOpen(false);
    setFieldValue(name, value);
  };

  const selectedOption = options.find(option => option.value === selected);

  return (
    <div className='Select-root'>
      <div className={`Select-input ${open ? 'Select-disable' : ''}`} onClick={() => setOpen(!open)}>
        <span className='Select-label'>{selectedOption?.label}</span>
        <Icon iconName={open ? 'ArrowDropUpOutlined' : 'ArrowDropDownOutlined'} className='Select-icon' />
      </div>
      {open && (
        <OutsideEvent onEvent={() => setOpen(false)}>
          <div className='Select-menu'>
            {options.map(option => (
              <div
                key={option.value}
                className={`Select-row ${option.value === selected ? 'Select-selected' : ''}`}
                onClick={() => onSelect(option.value)}
              >
                <span className='Select-label'>{option.label}</span>
              </div>
            ))}
          </div>
        </OutsideEvent>
      )}
    </div>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

Select.defaultProps = {
  name: '',
};

export default Select;
