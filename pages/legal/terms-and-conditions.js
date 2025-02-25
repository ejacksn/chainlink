import React from 'react'
import styled from 'styled-components'
import Navbar from '@/components/Dashboard/Navbar'


export default function terms_of_use() {
  return (
    <>
    <Navbar/>
    <Content>
    <H1>Terms and Conditions</H1>
    <H3></H3>
    <H2></H2>
    <P></P>
    <H2></H2>
    <P></P>
    <H2></H2>
    <P></P>
    <H2></H2>
    <P></P>
    <H2></H2>
    </Content>
    </>

  )
}
const Content = styled.div`
  display: flex;
  background-color: #061003;
  width: 100%;
  height: 100%;
  `

const H1 = styled.h1`
  color: white;
  font-size: 5rem;
  font-weight: 500;
  font-family: poppins, sans-serif;
`
const H2 = styled.h2`
  color: white;
  font-size: 4rem;
  font-weight: 500;
  font-family: poppins, sans-serif;
`
const H3 = styled.h3`
  color: white;
  font-size: 3rem;
  font-weight: 500;
  font-family: poppins, sans-serif;
`
const P = styled.p`
  color: white;
  font-size: 2rem;
  font-weight: 500;
  font-family: poppins, sans-serif;
`
