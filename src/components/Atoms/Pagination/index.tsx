import './_index.scss';
import { useFormikContext } from 'formik';

// Custom Components
import Icon from 'components/Atoms/Icon';

type Props = {
  name: string;
};

const Pagination = (props: Props) => {
  const { name } = props;
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
        //disabled={page >= count}
        className='Pagination-button Pagination-icon'
        onClick={() => handlePagination(page + 1)}
      >
        <Icon iconName='KeyboardArrowRightOutlined' />
      </button>
    </div>
  );
};

export default Pagination;
