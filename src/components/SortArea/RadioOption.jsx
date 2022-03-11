import { memo } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

function RadioOption({
  name, value, checked, onClick,
}) {
  return (
    <RadioRow checked={checked} onClick={() => onClick({ name, value })}>
      {name}
      <RadioIcon checked={checked} />
    </RadioRow>
  );
}

export default memo(RadioOption);

RadioOption.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

const RadioRow = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0.2rem;
  border-bottom: 1px solid #ccc;
  font-size: 1.2rem;
  cursor: pointer;
  &:last-child {
    border-bottom: 0;
  }
  color: ${({ checked }) => (checked ? 'black' : '#666')};
  font-weight: ${({ checked }) => checked && 600};
`;

const RadioIcon = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  border: 1px solid #ccc;
  border-radius: 50%;
  position: relative;
  ${({ checked }) => checked
    && css`
      border-color: black;
      &:after {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        content: '';
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background: black;
      }
    `}
`;
