import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import Navbar from '@/components/Dashboard/Navbar';
import MicroBoard from '@/components/linkBoards/MicroBoard';

export default function Explore(){
    return(
        <div>
         
        <Navbar></Navbar>
        <PageDiv> 
        <Header>Popular</Header>
        <DisplayDiv>
            <MicroBoard></MicroBoard>
            <MicroBoard></MicroBoard>

        </DisplayDiv>
        <ul>

        </ul>




        </PageDiv>
        
        
        
        

        
        

        </div>



    );
}

const PageDiv = styled.div`
    background-color: #061003;
    width: 100%;
    height: 100vh;
    margin: 0%;
    overflow: hidden;
`
const Header = styled.h1`
    color: #D0D6B3;
    font-size: 4rem;
    
    margin-top: 5%;
    font-family: 'Poppins', sans-serif;
    font-weight: 300px;
    margin-left: 5%;
`
const DisplayDiv = styled.div`
    background-color: #aaaea0;
    width: 80%;
    height: 80vh;
    margin-top: 5%;
    border-radius: 10px;
    margin-left: 5%;
`