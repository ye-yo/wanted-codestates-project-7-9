import styled from 'styled-components';
import { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { IoRefreshOutline } from 'react-icons/io5';
import Selector from './Selector';
import SortModal from './SortModal';
import { RoundedButton } from '../Button';
import SORT_OPTIONS from '../../constants/sort';

function SortBar() {
  const sortOption = useSelector(
    (state) => state.review.sortOption || SORT_OPTIONS[0],
  );
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = useCallback(() => {
    setIsOpenModal((isOpen) => !isOpen);
  }, []);

  const handleClickRefresh = () => {
    // 데이터 re-fetch
  };

  return (
    <FilterRow>
      <Selector name="정렬" onClick={toggleModal} />
      <FilterButton>전체</FilterButton>
      <FilterButton>{sortOption}</FilterButton>
      <RefreshButton onClick={handleClickRefresh}>
        <IoRefreshOutline />
      </RefreshButton>
      {isOpenModal && <SortModal setIsOpenModal={setIsOpenModal} />}
    </FilterRow>
  );
}

export default SortBar;

const FilterRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 1rem;
  background: ${({ theme }) => theme.color.backLightGray};
`;

const FilterButton = styled(RoundedButton)`
  ${({ theme }) => theme.buttonBlue};
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 0.4rem;
`;

const RefreshButton = styled.button`
  margin-left: auto;
  border: none;
  color: ${({ theme }) => theme.color.gray};
  background: none;
  width: auto;
  height: 2rem;
  margin-right: .6rem;
  > svg {
    transform: rotate(45deg);
    width: 100%;
    height: 100%;
  }
`;
