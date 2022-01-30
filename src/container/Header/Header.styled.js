import styled from "styled-components";

export const StyledHeader = styled.div`
  position: sticky;
  top: 0;
  max-width: 100vw;
  padding: 0 24px;
  position: relative;
  background: radial-gradient(
    100% 22449.71% at 9.72% 0%,
    #332d3d 0%,
    #292530 100%
  );
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 1000px) {
    padding: 0 135px;
  }
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

export const StyledLink = styled.span`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  color: #fff;
  text-decoration: none;
  font-size: 24px;
  line-height: 36px;
  @media (min-width: 428px) {
    font-size: 14px;
    line-height: 21px;
  }
`;

export const StyledNavList = styled.ul`
  display: none;

  @media (min-width: 1000px) {
    flex-wrap: no-wrap;
    width: 211px;
    justify-content: space-between;
    margin-left: auto;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    & li {
      @media (max-width: 428px) {
        text-align: center;
        flex: 1 100%;
        position: absolute;
        bottom: 0;
      }
    }
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 428px) {
    flex: 1 100%;
  }
`;

export const StyledConnectButton = styled.div`
  cursor: pointer;
  font-size: 9.5px;
  line-height: 12px;
  margin: 16px 14px 16px auto;
  width: 47px;
  height: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50.45px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  text-align: center;
  color: #292630;
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

  @media (min-width: 428px) {
    width: 144px;
    height: 45.86px;
    font-size: 12.8408px;
    line-height: 19px;
    margin: 29.83px 16px 29.17px auto;
  }

  @media (min-width: 1000px) {
    width: auto;
    height: auto;
    border-radius: 55px;
    padding: 15px 22px 14px 23px;
    font-size: 14px;
    line-height: 21px;
    margin: 14px 20px 14px 44px;
  }
`;

export const StyledToggleButton = styled.div`
  cursor: pointer;
  width: 42px;
  aspect-ratio: 1/1;
  border-radius: 21px;
  background: rgba(45, 44, 51, 1);
  @media (max-width: 320px) {
    width: 45px;
  }
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
