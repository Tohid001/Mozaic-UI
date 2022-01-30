import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  StyledHeader,
  StyledNavContainer,
  StyledLogo,
  StyledNavListButtonContainer,
  StyledLink,
  StyledNavList,
  StyledConnectButton,
  StyledToggleButton,
  StyledBar,
} from "./Header.styled";

import Logo from "./logo.png";
import classes from "./Header.module.css";

function Header() {
  return (
    <StyledHeader>
      <StyledNavContainer>
        <NavLink to="/">
          <StyledLogo>
            <img src={Logo} />
          </StyledLogo>
        </NavLink>

        <StyledNavListButtonContainer>
          <StyledNavList>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? classes.activeclassname : undefined
                }
              >
                <StyledLink>Products</StyledLink>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/stake"
                className={({ isActive }) =>
                  isActive ? classes.activeclassname : undefined
                }
              >
                <StyledLink>Stake</StyledLink>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/vote"
                className={({ isActive }) =>
                  isActive ? classes.activeclassname : undefined
                }
              >
                <StyledLink>Vote</StyledLink>
              </NavLink>
            </li>
          </StyledNavList>
          <StyledConnectButton as="a" href="">
            Connect Wallet
          </StyledConnectButton>
          <StyledToggleButton>
            <StyledBar />
          </StyledToggleButton>
        </StyledNavListButtonContainer>
      </StyledNavContainer>
    </StyledHeader>
  );
}

export default Header;
