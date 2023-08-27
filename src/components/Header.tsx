import React from "react";
import Logo from "@/components/Logo";
import styled from "styled-components";
import NavLink from "@/components/NavLink";
import { useMediaQuery } from "@/components/useMediaQuery";

const Header = () => {
    const isNonMobileScreen = useMediaQuery(1100);
  return (
    <HeaderContainer>
      <Logo />
      {isNonMobileScreen && (
        <NavLinkWrapper>
          <NavLink padding="1rem" to="#benefits">
            Como funciona
          </NavLink>
          <NavLink padding="1rem" to="#email">
            Cases
          </NavLink>
          <NavLink padding="1rem" to="#email">
            Escopo
          </NavLink>
          <NavLink padding="1rem" to="#email">
            Planos
          </NavLink>
          <NavLink padding="1rem" to="#email">
            Dúvidas
          </NavLink>
        </NavLinkWrapper>
      )}
    </HeaderContainer>
  );
};

const NavLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;
const HeaderContainer = styled.div`
  border: none;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1100px) {
    justify-content: center;
  }
  align-items: center;
  background-color: ${(p) => p.theme.primary};
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem 0;
  /* background-color: red; */
`;

export default Header;
