import styled from "styled-components";
import React, { useState } from 'react'
import axios from 'axios'
import axiosInstance from "../axios";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.all-free-download.com/images/graphicthumb/vienna_fashion_week_513282.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
   const [loading, setLoading] = useState(false)

  
 const handleChange = async (e) =>{
   e.preventDefault()
  const userObject = {
    username: userName,
    email: email,
    password: password
};
try{
  setLoading(true)
  const {data} = await axiosInstance.post('/api/auth/signup', userObject)
  if (data) {
    console.log("data...",data)
  }
  setLoading(false)
}catch(e){
  setLoading(false)
  console.log("error", e)
}

  
 }
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
          onChange = {(e)=> setUserName(e.target.value)}
          value ={userName}
          placeholder="username" />
          <Input
            onChange = {(e)=> setEmail(e.target.value)}
            value ={email}
          placeholder="email" />
          <Input placeholder="password" 
             value ={password}
            onChange = {(e)=> setPassword(e.target.value)}
            type="password"
          />
          {/* <Input placeholder="confirm password" /> */}
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button
          onClick={handleChange}
          >{loading?"loading...":"CREATE"}</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
