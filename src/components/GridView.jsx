import styled from 'styled-components';

function GridView() {
  const reviews = [];
  const handleClickImage = (reviewId) => {
    // 상세 페이지로 이동
  };

  return (
    <GridViewWrap>
      {reviews.slice(0, 20).map((review) => (
        <ImageBox
          onClick={() => handleClickImage(review.id)}
          src={`https://i.balaan.io/review/${review.img[0]}`}
        />
      ))}
    </GridViewWrap>
  );
}

export default GridView;

const GridViewWrap = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 2px;
`;

const ImageBox = styled.img`
  max-width: calc((500px - 2px) / 3);
  width: calc((500px - 2px) / 3);
  max-height: calc((500px - 2px) / 3);
  border-top: 1px solid #fff;
  border-left: 0;
  border-right: 0;
  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3) {
    border-top: 0;
  }
  &:nth-child(3n - 1) {
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
  }

  @media only screen and (max-width: 500px) {
    max-width: calc((100vw - 2px) / 3);
    width: calc((100vw - 2px) / 3);
    max-height: calc((100vw - 2px) / 3);
  }
`;
