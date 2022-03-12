import styled from 'styled-components';
import PropTypes from 'prop-types';

function Image({ src }) {
  return (
    <ImageArea>
      <Img src={src} alt="img" />
    </ImageArea>
  );
}

export default Image;

const ImageArea = styled.div`
  max-width: 500px;
  height: 40rem;
  text-align: center;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

Image.propTypes = {
  src: PropTypes.string.isRequired,
};
