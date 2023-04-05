import './_index.scss';
import { Formik, Form } from 'formik';

// Custom components
import Select from 'components/Atoms/Select';
import Pagination from 'components/Atoms/Pagination';
import FormikObserver from 'utils/components/FormikObserver';
import { limitSelector } from 'dump/select';

type Props = {
  onSubmit: Function;
  count: number;
};

const ListNavigation = (props: Props) => {
  const { onSubmit, count } = props;

  return (
    <Formik
      enableReinitialize
      initialValues={{
        _page: 1,
        _limit: '5',
      }}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values);
        setSubmitting(false);
      }}
    >
      <Form className='ListNavigation-root'>
        <Pagination name='_page' count={count} />
        <Select name='_limit' options={limitSelector} />
        <FormikObserver />
      </Form>
    </Formik>
  );
};

export default ListNavigation;
