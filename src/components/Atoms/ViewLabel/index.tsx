import styled from 'styled-components';
import PropTypes from 'prop-types';

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

ViewLabel.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ViewLabel.defaultProps = {
  color: '',
  text: '',
};

export default ViewLabel;
