import React from 'react'
import styled from 'styled-components';


export default function MicroBoard({BoardTitle, BoardDescription, BoardLink}) {
  return (
    <Link href={BoardLink}>
    <BoardItem>
        <BoardTitle>{BoardTitle}</BoardTitle>
        <Description>{BoardDescription}</Description>
        


    </BoardItem>
    </Link>
        
    
  )
}

const BoardItem = styled.div`
    background-color: #061003;
    width: 80%;
    height: 20vh;
    margin-top: 5%;
    margin-left: 5%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2rem;
    color: #061003;
    font-family: 'Poppins', sans-serif;

`
const BoardTitle = styled.h1`
    font-size: 2rem;
    color: #D0D6B3;
    font-family: 'Poppins', sans-serif;
    font-weight: 300px;
`