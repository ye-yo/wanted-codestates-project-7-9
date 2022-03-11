import {
  memo, useEffect, useRef, useCallback,
} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setReviews } from '../redux/actions/review';
import useInfiniteScroll from '../hooks/useInfiniteScroll';

let page = 1;
function GridView() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const listRef = useRef();
  const reviewList = useSelector((state) => state.review.reviews);
  const sortOption = useSelector((state) => state.review.sortOption);

  const getMoreItems = useCallback(() => {
    setLoading(true);
    page += 1;
    dispatch(setReviews(page, 20, sortOption?.value));
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  const { setContainerRef, setLoading } = useInfiniteScroll({ getMoreItems });

  useEffect(() => {
    dispatch(setReviews(1, 20, null, true));
    setContainerRef(listRef);
  }, [dispatch, setContainerRef]);

  const handleClickImage = (reviewId) => {
    navigate(`/details/${reviewId}`);
  };

  return (
    <GridViewWrap ref={listRef}>
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
  width: 100%;
  height: 100%;
  max-height: calc((500px - 2px) / 3);
  object-fit: cover;
  cursor: pointer;
  @media only screen and (max-width: 500px) {
    max-height: calc((100vw - 2px) / 3);
  }
`;
