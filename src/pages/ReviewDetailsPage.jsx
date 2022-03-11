import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ListNav from '../components/ListView/ListNav';
import InfoTop from '../components/ListView/InfoTop';
import Image from '../components/ListView/Image';
import SocialArea from '../components/ListView/SocialArea';
import Stars from '../components/ListView/Stars';
import Desc from '../components/ListView/Desc';
import Content from '../components/ListView/Content';
import List from '../components/Comments/List';
import { detialReview } from '../redux/actions/review';

function ReviewDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const reviewList = useSelector((state) => state.review.reviews);
  const detailList = useSelector((state) => state.review.details);
  useEffect(() => {
    dispatch(detialReview(id, reviewList));
  }, [dispatch, id, reviewList]);

  return (
    <Detail>
      <ListNav title="리뷰 상세보기" />
      {detailList.map((item) => (
        <div key={item.id}>
          <div>
            <InfoTop username={item.username} createdAt={item.createdAt} />
            <Image src={item.images[0].src} />
            <SocialArea likes={item.likes} />
            <Stars stars={item.stars} />
            <Desc description={item.description} />
            <Content review={item.review} />
          </div>
          <Comments>
            <List comments={item.comments} />
          </Comments>
        </div>
      ))}
    </Detail>
  );
}

export default ReviewDetailsPage;

const Detail = styled.div`
  position: absolute;
  top: 0;
  z-index: 50;
  background-color: ${(props) => props.theme.color.white};
`;

const Comments = styled.div`
  background-color: ${(props) => props.theme.color.unselected};
  padding: 2rem 0;
`;
