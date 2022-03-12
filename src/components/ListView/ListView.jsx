import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  useEffect, useRef, useCallback,
} from 'react';
import Content from './Content';
import Desc from './Desc';
import Image from './Image';
import InfoTop from './InfoTop';
import SocialArea from './SocialArea';
import Stars from './Stars';
import { setReviews } from '../../redux/actions/review';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

function ListView() {
  const navigate = useNavigate();
  const detailPageClick = (id) => {
    navigate(`/details/${id}`);
  };

  const dispatch = useDispatch();
  const listRef = useRef();
  const reviewList = useSelector((state) => state.review.reviews);
  const fetchOptions = useSelector((state) => state.review.options);

  const getMoreItems = useCallback(async () => {
    if (fetchOptions?.pageNo) {
      const { pageNo, perPage, sort } = fetchOptions;
      setLoading(true);
      await dispatch(setReviews(pageNo + 1, perPage, sort));
      setLoading(false);
    }
    // eslint-disable-next-line
  }, [dispatch]);

  const { setContainerRef, setLoading } = useInfiniteScroll({ getMoreItems });

  useEffect(() => {
    const { sort } = fetchOptions;
    dispatch(setReviews(1, 10, sort, true));
    setContainerRef(listRef);
    // eslint-disable-next-line
  }, [dispatch, setContainerRef]);

  return (
    <>
      {reviewList.map((item) => (
        <ListPage
          ref={listRef}
          key={item.id}
          onClick={() => detailPageClick(item.id)}
          onKeyDown={() => detailPageClick(item.id)}
          aria-hidden="true"
        >
          <InfoTop username={item.username} createdAt={item.createdAt} />
          <Image src={item.images[0].src} />
          <SocialArea likes={item.likes} />
          <Stars stars={item.stars} />
          <Desc description={item.description} />
          <Content review={item.review} />
        </ListPage>
      ))}
    </>
  );
}

export default ListView;

const ListPage = styled.div`
  cursor: pointer;
`;
