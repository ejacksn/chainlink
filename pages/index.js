import Hero from "@/components/LandingPage/Hero"
import { styled } from 'styled-components'
import Navbar from "@/components/Dashboard/Navbar"
import Footer from "@/components/LandingPage/Footer"

import ScrollingText from '@/components/ScrollingText';
import Link from "next/link";

export default function Home() {
  return (
    <>
      

        <Navbar/>
        <HomePageContainer>
        
        <ScrollingText />
        <Link href="/boards">
        <BrowseButton>Browse</BrowseButton>
        </Link>
        <ScrollingText />
        
        </HomePageContainer>
        
    </>
  )
}

const HomePageContainer = styled.div`
  display: block;
  background-color: #061003;
  width: 100%;
  margin: 0%;
  overflow: hidden;
`
const BrowseButton = styled.button`
  background-color: #AAAE7F;
  color: #061003;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
  margin:  0% 50%;
`
