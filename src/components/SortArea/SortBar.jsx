import styled from 'styled-components';
import { useState, useCallback } from 'react';
import { IoRefreshOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { refreshReviews } from '../../redux/actions/review';
import Selector from './Selector';
import SortModal from './SortModal';
import { RoundedButton } from '../Button';
import SORT_OPTIONS from '../../constants/sort';
import useData from '../../hooks/useData';

function SortBar() {
  const dispatch = useDispatch();
  const fetchData = useData();
  const sortOption = useSelector(
    (state) => state.review.sortOption || SORT_OPTIONS[0],
  );
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = useCallback(() => {
    setIsOpenModal((isOpen) => !isOpen);
  }, []);

  const handleClickRefresh = async () => {
    const data = await fetchData(1, 20);
    dispatch(refreshReviews(data));
  };

  return (
    <FilterRow>
      <Selector name="정렬" onClick={toggleModal} />
      <FilterButton>전체</FilterButton>
      <FilterButton>{sortOption.name}</FilterButton>
      <RefreshButton onClick={handleClickRefresh} />
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

const RefreshButton = styled(IoRefreshOutline)`
  margin-left: auto;
  border: none;
  color: ${({ theme }) => theme.color.gray};
  background: none;
  width: auto;
  height: 2rem;
  margin-right: .6rem;
  transform: rotate(45deg);
  cursor: pointer;
`;
