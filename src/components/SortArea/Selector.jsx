import styled from 'styled-components';
import PropTypes from 'prop-types';
import { IoIosArrowDown } from 'react-icons/io';
import { RoundedButton } from '../Button';

function Selctor({ name, onClick }) {
  return (
    <SelectorButton onClick={onClick}>
      {name}
      <IoIosArrowDown />
    </SelectorButton>
  );
}

export default Selctor;
Selctor.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const SelectorButton = styled(RoundedButton)`
  ${({ theme }) => theme.buttonBlueBorder};
  display: flex;
  flex-direction: row;
  align-items: center;
  > svg {
    color: ${({ theme }) => theme.color.gray};
  }
`;
