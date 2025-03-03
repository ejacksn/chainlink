import React, { use } from 'react'
import Navbar from '@/components/Dashboard/Navbar'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { getBoard } from '@/backend/Database'

function Board() {

    const [board, setBoard] = useState(null);
    const [isLoading, setIsLoading] = useState(true); //variable to use while board is loadign

    const router = useRouter()
    const boardId = router.query.board;//get id to use from url


    const fetchBoard = async () => {
        
        const board = await getBoard(boardId);
        setBoard(board);
        setIsLoading(false); //board is fettched so no longer loading
        console.log(board);
    }

    useEffect(() => {//fetch the board specifically based on the board id in the url
        if(!boardId){ //if there isn't a board id don't fetch anything
            return;
        }

        fetchBoard();
    },[boardId]);

    

  return (
    <>
        <Navbar/>
        <BoardPageContainer>
            {isLoading ? <h1>Loading...</h1> : null /*display loading message*/} 
            {(!board)? <h1>Board not found</h1> : ( /*display message if board is not found*/ 
            <>
            <BoardTitle>{board.title}</BoardTitle>
            <span>
                <h2>Author: {board.ownerName}</h2>
                <h3>Views: {board.views}</h3>
            </span>

            <BoardContent>
                {board.links.map((link, index) => (
                    <BoardItem key={index}>
                        <a href={link.url} target="_blank">{link.url}</a> {/* links open in neew tab*/}
                        <BoardDescription>{link.description}</BoardDescription>
                    </BoardItem>
                ))}
            </BoardContent>

            </>
            )}




        </BoardPageContainer>

        

        
    </>
  )
}

export default Board

const BoardPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #061003;
  width: 100vw;
  height: 100vh;
  margin: 0%;
  overflow: scroll;
  align-items: left;
`

const BoardTitle = styled.h1`
    font-size: 24px;
    color: var(--light-primary);
    
`
const BoardContent = styled.ul`

`
const BoardItem = styled.li`

`
const BoardDescription = styled.p`

`