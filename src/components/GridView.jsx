import { memo } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function GridView({ datas }) {
  const navigate = useNavigate();
  const handleClickImage = (reviewId) => {
    navigate(`/details/${reviewId}`);
  };

  return (
    <GridViewWrap>
      {datas.map((review) => (
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

GridView.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
};

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
