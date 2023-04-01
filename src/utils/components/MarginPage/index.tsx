import './_index.scss';

type Props = { children: JSX.Element };

const MarginPage = (props: Props) => {
  const { children } = props;

  return <div className='MarginPage-root'>{children}</div>;
};

export default MarginPage;
