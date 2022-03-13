import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
`;

function Spinner({
  size, color, loading, sizeUnit,
}) {
  return loading && <Wrapper size={size} color={color} sizeUnit={sizeUnit} />;
}

export default Spinner;

const Wrapper = styled.div`
  width: ${(props) => `${props.size}${props.sizeUnit}`};
  height: ${(props) => `${props.size}${props.sizeUnit}`};
  border: ${(props) => `${props.size / 5}${props.sizeUnit}`} solid
    ${(props) => props.color};
  border-right-color: transparent;
  border-radius: 50%;
  animation: ${rotate} 0.75s linear infinite;
  top: 50%;
  left: calc(98% / 2);
  position: fixed;
  z-index: 999;
`;

Spinner.defaultProps = {
  loading: true,
  size: 30,
  color: '#000',
  sizeUnit: 'px',
};

Spinner.propTypes = {
  loading: PropTypes.bool,
  size: PropTypes.number,
  color: PropTypes.string,
  sizeUnit: PropTypes.string,
};
