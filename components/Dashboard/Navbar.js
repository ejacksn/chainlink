import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import { logOut } from '@/backend/Auth';
import { useStateContext } from '@/context/StateContext';
import Home from '@/components/Dashboard/Home'
const Navbar = () => {
  const { setUser } = useStateContext()

  return (
    <Nav>
      <NavLeft>
        <Logo onClick={() => logOut(setUser)} href="/">chainLink</Logo>
        <Home></Home>
      </NavLeft>

      <NavLinks>

        <ButtonLink href="/auth/login">Login</ButtonLink>
        <ButtonLink href="/auth/signup">Sign Up</ButtonLink>
        
      </NavLinks>
    </Nav>
  );
};

const Nav = styled.nav`
background-color: #9197ae; /*secondary*/
width:100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  color: #343135; /*primary*/
  font-family: 'Roboto', sans-serif;
`;

const NavLeft = styled.div`


`

const NavLinks = styled.div`

`;

const ButtonLink = styled(Link)`

`;

export default Navbar;
