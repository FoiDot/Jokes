import './_index.scss';

type Props = {
  children: JSX.Element | JSX.Element[];
  border?: boolean;
};

export const Table = (props: Props) => {
  const { children } = props;

  return <table className='Table-root'>{children}</table>;
};

export const Thead = (props: Props) => {
  const { children } = props;

  return <thead className='Thead-root'>{children}</thead>;
};

export const Tbody = (props: Props) => {
  const { children } = props;

  return <tbody className='Tbody-root'>{children}</tbody>;
};

export const Tr = (props: Props) => {
  const { children } = props;

  return <tr className='Tr-root'>{children}</tr>;
};

export const Th = (props: Props) => {
  const { children, border } = props;

  return <th className={`Th-root ${border ? 'border' : ''}`}>{children}</th>;
};

export const Td = (props: Props) => {
  const { children, border } = props;

  return <td className={`Td-root ${border ? 'border' : ''}`}>{children}</td>;
};
