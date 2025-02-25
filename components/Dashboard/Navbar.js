import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import { logOut } from '@/backend/Auth';
import { useStateContext } from '@/context/StateContext';
import Home from '@/components/Dashboard/Home'
import { GlobalStyle } from '@/pages/_app';
const Navbar = () => {
  const { setUser } = useStateContext()

  return (
    <Nav>
      <Logo className="poppins-medium"onClick={() => logOut(setUser)} href="/">chainLink.</Logo>
      <Home></Home>
      <NavLinks>
        <ButtonLink href="/boards/">Explore</ButtonLink>
        <ButtonLink href="/auth/login">Login</ButtonLink>
        <ButtonLink href="/auth/signup">Sign Up</ButtonLink>
      </NavLinks>
      <NavEnd>

      </NavEnd>
    </Nav>
  );
};

const Nav = styled.nav`
  background-color: #061003;
  display: flex;
  flex-direction:row;
  align-items:center;
  height: min(10vh, 50px);
  
  width:100%;
  
`;

const Logo = styled(Link)`
  color: #D0D6B3;
  text-decoration:none;
  font-size: 1.5rem;
  font-weight: bold;
  padding-left: 1%;

`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  width: min(40%, 400px);
  

`;

const ButtonLink = styled(Link)`
  color: #D0D6B3;
  text-decoration:none;
  padding: 0.5rem;

  &:hover {
    background-color: #D0D6B3; //colorswap when hover
    color: #061003;
    
    border-radius: 5px;
  }
    font-family: poppins;

`;
const NavEnd = styled.div`
  display: flex;
  width:50%
`

export default Navbar;
