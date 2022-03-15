import {
  memo, useEffect, useRef, useCallback,
} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setReviews } from '../redux/actions/review';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import Spinner from './Spinner';

const getGridPageNo = (pageNo, perPage) => ((perPage === 10 ? pageNo / 3 : pageNo) || 0) + 1;
function GridView() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const listRef = useRef();
  const reviewList = useSelector((state) => state.review.reviews);
  const fetchOptions = useSelector((state) => state.review.options);

  const getMoreItems = useCallback(async () => {
    if (fetchOptions?.pageNo) {
      setLoading(true);
      const { pageNo, perPage, sort } = fetchOptions;
      const newPageNo = getGridPageNo(pageNo, perPage);
      await dispatch(setReviews(newPageNo, 30, sort));
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, fetchOptions]);

  const { setContainerRef, setLoading, loading } = useInfiniteScroll({
    getMoreItems,
    dataLength: reviewList.length,
    type: 'grid',
  });

  useEffect(() => {
    const fetchData = async () => {
      if (reviewList.length === 0) {
        setLoading(true);
        const { pageNo, perPage, sort } = fetchOptions;
        const newPageNo = getGridPageNo(pageNo, perPage);
        await dispatch(setReviews(newPageNo, 30, sort));
        setLoading(false);
      }
    };
    fetchData();
    setContainerRef(listRef);
    // eslint-disable-next-line
  }, [dispatch, setContainerRef]);

  const handleClickImage = (reviewId) => {
    navigate(`/details/${reviewId}`);
  };

  return (
    <GridViewWrap ref={listRef}>
      {loading && <Spinner color="#4348a2" />}
      {reviewList.map((review) => (
        <ImageBox
          key={review.id}
          onClick={() => handleClickImage(review.id)}
          src={review.images?.[0]?.src}
        />
      ))}
    </GridViewWrap>
  );
}

export default memo(GridView);

const GridViewWrap = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1px;
  margin-top: 2px;
`;

const ImageBox = styled.img`
  width: calc((500px - 2px) / 3);
  height: calc((500px - 2px) / 3);
  cursor: pointer;
  object-fit: cover;
  @media only screen and (max-width: 500px) {
    height: calc((100vw - 2px) / 3);
    width: calc((100vw - 2px) / 3);
  }
`;
