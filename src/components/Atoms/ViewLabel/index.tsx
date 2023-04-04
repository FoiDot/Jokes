import styled from 'styled-components';

type Props = {
  color: string;
  text?: string | number;
};

const Span = styled.span`
  color: ${(props: Props) => props.color};
`;

const ViewLabel = (props: Props) => {
  const { color, text } = props;

  return <Span color={color}>{text}</Span>;
};

export default ViewLabel;
