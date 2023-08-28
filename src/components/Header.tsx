import React from "react";
import Logo from "@/components/Logo";
import styled from "styled-components";
import NavLink from "@/components/NavLink";
import { useMediaQuery } from "@/components/useMediaQuery";
import { useState, useEffect } from "react";
import DarkLogo from "./DarkLogo";

const Header = () => {
  const isNonMobileScreen = useMediaQuery(1100);
  //check if has scrolled

  const [hasScrolled, setHasScrolled] = useState(false);

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setHasScrolled(window.scrollY > 100);
    });
  }, [hasScrolled]);

  return (
    <HeaderContainer hasScrolled={hasScrolled}>
      <Logo />
      {isNonMobileScreen && (
        <NavLinkWrapper>
          <NavLink to="#como-funciona">Como funciona</NavLink>
          <NavLink to="#economia">Economia</NavLink>
          <NavLink to="#escopo">Escopo</NavLink>
          <NavLink to="#planos">Planos</NavLink>
          <NavLink to="#faq">Dúvidas</NavLink>
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
  gap: 20px;
`;

//disable bbackground while not scrolled
const HeaderContainer = styled.div<{ hasScrolled: boolean }>`
  position: fixed;
  ${({ hasScrolled }) =>
    hasScrolled &&
    `
    border-bottom: 1px solid #777;
    `}

  width: 100%;
  height: 80px;
  z-index: 100;
  /* border: none; */
  display: flex;
  justify-content: space-between;
  @media (max-width: 1100px) {
    justify-content: center;
  }
  align-items: center;
  background-color: #0000;
  ${({ hasScrolled }) =>
    hasScrolled &&
    `
    background-color: #000d;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    backdrop-filter: blur(10px);
    `}

  width: 100%;
  margin: 0 auto;
  padding: 1rem 0;

  @media (min-width: 1100px) {
    padding: 1rem 200px;
  }
  box-sizing: border-box;
  a {
    color: #fff;
  }
`;

export default Header;
