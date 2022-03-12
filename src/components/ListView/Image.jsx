import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useState } from 'react';

function Image({ images }) {
  const [current, setCurrent] = useState(0);
  const { length } = images;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <ImageArea>
      {length > 1 ? (
        <>
          <LeftIcon onClick={prevSlide} />
          <RightIcon onClick={nextSlide} />
        </>
      ) : null}
      {images.map(({ src, id }, index) => (
        <Slide key={id} className={index === current ? 'active' : ''}>
          {index === current && <Img src={src} alt="img" />}
        </Slide>
      ))}
    </ImageArea>
  );
}

export default Image;

const ImageArea = styled.div`
  max-width: 500px;
  position: relative;
`;

const LeftIcon = styled(FiChevronLeft)`
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 32px;
  z-index: 10;
  cursor: pointer;
`;
const RightIcon = styled(FiChevronRight)`
  font-size: 20px;
  position: absolute;
  top: 50%;
  right: 32px;
  z-index: 10;
  cursor: pointer;
`;

const Slide = styled.div`
  opacity: 1;
  transition-duration: 1s ease;
  ${(props) => props.active
    && css`
      opacity: 1;
      transition-duration: 1s;
      transform: scale(1.08);
    `}
`;

const Img = styled.img`
  max-width: 500px;
`;

Image.propTypes = {
  images: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};
