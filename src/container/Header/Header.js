import React from "react";
import {
  StyledHeader,
  StyledNavContainer,
  StyledLogo,
  StyledList,
} from "./Header.styled";
import Logo from "./logo.png";

function Header() {
  return (
    <StyledHeader>
      <StyledNavContainer>
        <StyledLogo>
          <img src={Logo} />
        </StyledLogo>
        <StyledList>
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href="">Stake</a>
          </li>
          <li>
            <a href="">Vote</a>
          </li>
        </StyledList>
      </StyledNavContainer>
    </StyledHeader>
  );
}

export default Header;
