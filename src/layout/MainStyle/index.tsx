import './_index.scss';

type Props = { children: JSX.Element };

const MainStyle = (props: Props) => {
  const { children } = props;

  return (
    <div className='global-background'>
      <div className='global-margin'>{children}</div>
    </div>
  );
};

export default MainStyle;
