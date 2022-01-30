import styled from "styled-components";

export const StyledHeader = styled.div`
  --padding: 0.09375;
  padding: 0 min(135px, calc(var(--padding) * calc(100vw)));

  position: sticky;
  top: 0;
  max-width: 100vw;
  /* background: radial-gradient(
    100% 22449.71% at 9.72% 0%,
    #332d3d 0%,
    #292530 100%
  ); */
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
  /* --widthRatio: 0.14653; */
  display: flex;
  /* gap: 2em; */
  /* width: min(211px, calc(var(--widthRatio) * calc(100vw))); */
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
  cursor: pointer;
  border-radius: 55px;
  padding: 15px 22px 14px 23px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #292630;
  margin: 14px 20px 14px 44px;
  background: linear-gradient(95.03deg, #ffbb00 0%, #ff9900 100.65%);

  //////Border with gradient and radius///////////
  background-clip: padding-box;
  position: relative;
  --border: 1px;
  border: solid var(--border) transparent;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: calc(var(--border) * -1);
    border-radius: inherit;
    background: linear-gradient(
      95.26deg,
      #ffeeb8 5.57%,
      rgba(0, 0, 0, 0) 97.7%
    );
  }
  //////Border with gradient and radius///////////
`;

export const StyledToggleButton = styled.div`
  cursor: pointer;
  width: 42px;
  height: 42px;
  border-radius: 21px;
  background: rgba(45, 44, 51, 1);

  //////Border with gradient and radius///////////
  background-clip: padding-box;
  position: relative;
  --border: 1px;
  border: solid var(--border) transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: calc(var(--border) * -1);
    border-radius: inherit;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.34) 0%,
      rgba(0, 0, 0, 0.17) 100%
    );
  }
  //////Border with gradient and radius///////////
`;

export const StyledBar = styled.div`
  background: #ffffff;

  --depth: 2.2px;
  --gap: calc(var(--depth) + 2.93px);
  border-radius: 1px;
  width: 10.89px;
  height: var(--depth);
  position: relative;
  &:before,
  &:after {
    content: "";
    position: absolute;
    height: var(--depth);
    background: #ffffff;
    border-radius: 1px;
  }

  &:before {
    width: 14px;
    transform: translateY(calc(var(--gap) * -1));
  }

  &:after {
    width: 7.78px;
    transform: translateY(calc(var(--gap) * 1));
  }

  transform: rotateY(180deg);
`;

// export const StyledBorderWithGradientAndRadius=styled.div`
// //////Border with gradient and radius///////////
// background-clip: padding-box;
//   position: relative;
//   --border: 1px;
//   border: solid var(--border) transparent;
//   &:before {
//     content: "";
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     z-index: -1;
//     margin: calc(var(--border) * -1);
//     border-radius: inherit;
//     background: linear-gradient(135deg, rgba(255, 255, 255, 0.34) 0%, rgba(0, 0, 0, 0.17) 100%);
//   }
//   //////Border with gradient and radius///////////
// `
