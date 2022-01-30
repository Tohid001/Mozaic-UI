import React from "react";
import {
  StyledHeader,
  StyledNavContainer,
  StyledLogo,
  StyledNavListButtonContainer,
  StyledNavList,
  StyledConnectButton,
  StyledToggleButton,
} from "./Header.styled";
import Logo from "./logo.png";

function Header() {
  return (
    <StyledHeader>
      <StyledNavContainer>
        <StyledLogo>
          <img src={Logo} />
        </StyledLogo>
        <StyledNavListButtonContainer>
          <StyledNavList>
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">Stake</a>
            </li>
            <li>
              <a href="">Vote</a>
            </li>
          </StyledNavList>
          <StyledConnectButton>Connect Wallet</StyledConnectButton>
          <StyledToggleButton></StyledToggleButton>
        </StyledNavListButtonContainer>
      </StyledNavContainer>
    </StyledHeader>
  );
}

export default Header;
