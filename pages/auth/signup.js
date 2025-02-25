import React, { useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useStateContext } from '@/context/StateContext'
import { isEmailInUse, register} from '@/backend/Auth'
import Link from 'next/link'
import Navbar from '@/components/Dashboard/Navbar'
const Signup = () => {

  const { user, setUser } = useStateContext()
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const router = useRouter()

  async function validateEmail(){
    const emailRegex = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if(emailRegex.test(email) == false ){
        return false;
    }
    console.log('so far so good...')
    const emailResponse = await isEmailInUse(email)
    console.log('email response', emailResponse)
    if(emailResponse.length == 0 ){
        return false;
    }

    return true;
}

  async function handleSignup(){
    const isValidEmail = await validateEmail()
    // console.log('isValidEmail', isValidEmail)
    // if(!isValidEmail){ return; }
    
    try{
        await register(email, password, setUser)
        router.push('/dashboard')
    }catch(err){
        console.log('Error Signing Up', err)
    }
  }


  return (
    <>
    <Navbar/>
    <CenterDiv>
    <Section>
        <Header>Sign Up</Header>
        <Input type="text" placeholder="username"value={password} onChange={()=>{}}/>
        <Input type="email" placeholder="email"value={email} onChange={(e) => setEmail(e.target.value)}/>
        <Input type="password" placeholder="password"value={password} onChange={(e) => setPassword(e.target.value)}/>

        <UserAgreementText>By signing in, you automatically agree to our <UserAgreementSpan href='/legal/terms-and-conditions' rel="noopener noreferrer" target="_blank"> Terms and Conditions</UserAgreementSpan></UserAgreementText>

        <MainButton onClick={handleSignup}>Signup</MainButton>

    </Section>
    </CenterDiv>
    </>
  )
}

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95vh;
  background-color: #061003;

`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 20px;
  background-color: #AAAE7F;
  border-radius: 8%;
  border: 2px solid #D0D6B3;
  padding: 20px;
`;

const Header = styled.h1`
  font-size: 24px; /* Adjusted for better scalability */
  color: #061003;
  font-family: 'Poppins', sans-serif;
`;

const Input = styled.input`
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  border-radius:7px;;
  border: border-box;
  border: 2px #061003 solid;
  height: 40px;
  margin: 1rem .5rem;
  padding-left: 7px;

  background-color: #D0D6B3;

`;

const InputTitle = styled.label` /* Changed to label for semantics */
  font-size: 14px;
`;

const MainButton = styled.button`
  background-color: #061003;

  color: #d0d6b3;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;

  height: 40px;
  border-radius: 8px;
  width: 50%;
  align-self: center;
  margin: 1rem;
  &:hover {
    background-color: #D0D6B3;
    color: #061003;
  }
`;

const UserAgreementText = styled.p`
  font-size: 12px;
  font-family: 'Poppins', sans-serif;
`;

const UserAgreementSpan = styled(Link)` 
  color: #061003;
  font-weight: bold;
  text-decoration: none; 
  &:hover {
    text-decoration: underline;
  }

`;


export default Signup