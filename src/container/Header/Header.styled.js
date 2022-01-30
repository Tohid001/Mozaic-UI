import styled from "styled-components";

export const StyledHeader = styled.div`
  padding: 0 135px;

  position: sticky;
  top: 0;
  max-width: 100vw;
  background: radial-gradient(
    100% 22449.71% at 9.72% 0%,
    #332d3d 0%,
    #292530 100%
  );
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const StyledNavContainer = styled.nav`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
`;

export const StyledLogo = styled.div`
  width: 134px;
  & img {
    max-width: 100%;
    display: block;
  }
`;

export const StyledNavListButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

export const StyledNavList = styled.ul`
  display: flex;
  /* gap: 2em; */
  width: 211px;
  justify-content: space-between;
  list-style: none;
  margin-left: auto;

  & li {
    & a {
      font-family: "Poppins", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: #fff;
    }
    &:nth-of-type(1) {
      & a {
        font-style: bold;
        font-weight: 700;
        color: #ffbb00;
      }
    }
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledConnectButton = styled.div`
  border-radius: 55px;
  background: linear-gradient(95.03deg, #ffbb00 0%, #ff9900 100.65%);
  border: 1px solid;
  border-image-source: linear-gradient(
    95.26deg,
    #ffeeb8 5.57%,
    rgba(0, 0, 0, 0) 97.7%
  );
  padding: 15px 22px 14px 23px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #292630;
  margin: 14px 20px 14px 44px;
`;

export const StyledToggleButton = styled.button`
  width: 42px;
  height: 42px;
  background: #2d2c33;
  border-radius: 21px;
  border: 1px solid;
  border-image-source: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.34) 0%,
    rgba(0, 0, 0, 0.17) 100%
  );
`;
