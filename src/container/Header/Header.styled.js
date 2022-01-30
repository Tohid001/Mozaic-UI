import styled from "styled-components";

export const StyledHeader = styled.div`
  display: grid;
  place-items: center;
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
  justify-content: space-between;
  align-items: center;
`;

export const StyledLogo = styled.div`
  width: 134px;
  & img {
    max-width: 100%;
    display: block;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  margin-left: auto;
  list-style: none;

  & li {
    & a {
      display: inline-block;
      font-family: "Fira Sans", sans-serif;
      font-family: "Poppins", sans-serif;
      font-family: "Roboto Slab", serif;
      font-size: 14px;
      line-height: 21px;
      text-decoration: none;
      font-style: normal;
      font-weight: 400;
    }
  }
`;

export const StyledLink = styled.li`
  & a {
  }
`;
