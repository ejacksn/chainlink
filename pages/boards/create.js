import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'


import { useStateContext } from '@/context/StateContext'

//add blank link (plus button function)
function addLink(url, description){ 
    setLinks([...links, {url: "", description: ""}])
}
const updateLinks = ()=>{}

//creation page for boards
export default function Create() {
    const { user } = useStateContext() //import user from global context
    const [links, setLinks] = useState([{url:"", description:""}]) //stateful list of links with descriptions


  return (
    <div>create</div>
  )
}

