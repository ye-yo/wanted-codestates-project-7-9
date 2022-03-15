import {
  memo, useState, useCallback, useMemo,
} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import RadioOption from './RadioOption';
import SORT_OPTIONS from '../../constants/sort';
import { setSortOption } from '../../redux/actions/review';

function SortModal({ setIsOpenModal }) {
  const dispatch = useDispatch();
  const fetchOptions = useSelector((state) => state.review.options);
  const { sort } = useMemo(() => fetchOptions, [fetchOptions]);
  const [selected, setSelected] = useState(sort || SORT_OPTIONS[0]);

  const handleClickApply = () => {
    dispatch(setSortOption(selected));
    toggleModal();
  };

  const handleClickOption = useCallback((option) => {
    setSelected(option);
  }, []);

  const toggleModal = () => setIsOpenModal((isOpen) => !isOpen);

  return (
    <ModalWrap onClick={toggleModal}>
      <ModalBottomBox onClick={(e) => e.stopPropagation()}>
        <Title>정렬</Title>
        <SortList sortOption={selected} onChange={handleClickOption} />
        <ApplyButton onClick={handleClickApply}>적용하기</ApplyButton>
      </ModalBottomBox>
    </ModalWrap>
  );
}

export default SortModal;

SortModal.propTypes = {
  setIsOpenModal: PropTypes.func.isRequired,
};

const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  font-size: 1.4rem;
  display: flex;
  flex-flow: row wrap;
`;

const ModalBottomBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  flex: 1;
  background-color: #fff;
  z-index: 10;
  padding: 1rem 1.4rem;
  max-width: 500px;
  margin: auto auto 0;
`;

const Title = styled.p`
  font-weight: 400;
  text-align: center;
`;

const ApplyButton = styled.button`
  color: white;
  background: black;
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 2px;
`;

const SortList = memo(({ sortOption, onChange }) => (
  <SortListWrap>
    {SORT_OPTIONS.map((option) => (
      <RadioOption
        onClick={onChange}
        key={option.value}
        name={option.name}
        value={option.value}
        checked={sortOption?.name === option.name}
      />
    ))}
  </SortListWrap>
));

SortList.propTypes = {
  sortOption: PropTypes.objectOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

const SortListWrap = styled.ul`
  width: 100%;
  height: fit-content;
  margin-bottom: 1.6rem;
`;
