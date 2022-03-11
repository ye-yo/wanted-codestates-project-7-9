import styled from 'styled-components';
import Review from './Review';

function Header() {
  return (
    <HeaderCustom>
      <Logo src="https://i.balaan.io/mobile/img/icon/ico_logo.png" alt="logo" />
      <Review />
    </HeaderCustom>
  );
}

export default Header;

const HeaderCustom = styled.header`
  display: grid;
  place-items: center;
  padding-top: 2vh;
`;

const Logo = styled.img`
  max-width: 200px;
  width: 38vw;
`;
