import './_index.scss';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';

// Custom Components
import Icon from 'components/Atoms/Icon';

type Props = {
  name: string;
  count: number;
};

const Pagination = (props: Props) => {
  const { name, count } = props;
  const { values, setFieldValue } = useFormikContext<any>();
  const { [name]: page } = values;

  const handlePagination = (page: number) => {
    setFieldValue(name, page);
  };

  return (
    <div className='Pagination-root'>
      <button
        type='button'
        disabled={page <= 1}
        className='Pagination-button Pagination-icon'
        onClick={() => handlePagination(page - 1)}
      >
        <Icon iconName='KeyboardArrowLeftOutlined' />
      </button>
      <button type='button' className='Pagination-button Pagination-active'>
        {page}
      </button>
      <button
        type='button'
        disabled={page >= count}
        className='Pagination-button Pagination-icon'
        onClick={() => handlePagination(page + 1)}
      >
        <Icon iconName='KeyboardArrowRightOutlined' />
      </button>
    </div>
  );
};

Pagination.propTypes = {
  name: PropTypes.string.isRequired,
};

Pagination.defaultProps = {
  name: '',
};

export default Pagination;
