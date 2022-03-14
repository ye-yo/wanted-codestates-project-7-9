import styled from 'styled-components';
import { FiArrowLeft, FiX } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function ModalNav({ title }) {
  const navigate = useNavigate();
  const prevClick = () => {
    navigate('/');
  };

  return (
    <Container>
      <Arrow onClick={prevClick} />
      <Item>{title}</Item>
      <Close onClick={prevClick} />
    </Container>
  );
}

export default ModalNav;

const Container = styled.header`
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgb(204 204 204) 0px 0px px 0px;
  background-color: ${(props) => props.theme.color.white};
  position: fixed;
  max-width: 500px;
  width: 100%;
  z-index: 30;
`;

const Item = styled.div`
  padding: 15px;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
`;

const Arrow = styled(FiArrowLeft)`
  font-size: 45px;
  padding-left: 1.6rem;
`;

const Close = styled(FiX)`
  font-size: 45px;
  padding-right: 1.6rem;
`;

ModalNav.propTypes = {
  title: PropTypes.string.isRequired,
};
