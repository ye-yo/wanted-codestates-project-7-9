import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from './Button';

function Review() {
  return (
    <ReviewCustom>
      <Text>리뷰</Text>
      <Link to="/register">
        <Button>리뷰등록</Button>
      </Link>
    </ReviewCustom>
  );
}

export default Review;

const ReviewCustom = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  margin: 1vw 1vh 0;
  box-shadow: 0 4px 4px -4px rgb(0 0 0 / 20%);
  padding: 1vw;
`;

const Text = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  border-bottom: 2px solid ${(props) => props.theme.color.black};
  padding: 0 1.3rem 0.6rem;
`;
