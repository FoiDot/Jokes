import './_index.scss';

type Props = {
  children: JSX.Element;
};

const OverLay = (props: Props) => {
  const { children } = props;

  return (
    <>
      <div className='OverLay-root'></div>
      {children}
    </>
  );
};

export default OverLay;
