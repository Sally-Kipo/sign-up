import './Fonts/fonts.css';
import React, { useState } from "react";
import { Container, Box, Boxwrapper, Title, Paragraph, Inputs, Button, Sign,  } from "./styles/Signup.styled";


const Signup = () => {

const [email , setEmail] = useState (""); 
const [password , setPassword] = useState ("");

const handleCreate = () => {
    if(email.trim().length === 0 || password.trim().length === 0)
        return alert('შეავსე ყველა ველი')
    if (email.length < 6 || password.length < 6) {
      return alert('მინიმუმ 6 სიმბოლო')
    }
    alert('შენ წარმატებით გაიარე რეგისტრაცია')
}
const handleSignIn = () => {
  alert('მაგდენი ჯერ არ ვიცი');
};

const boxProps1 = {
    boxPosition: 'absolute',
    boxWidth: "320px",
    boxHeight: "320px",
    boxTop: "60px",
    boxLeft: "-165px",
    boxBorderRadius: "40px",
    boxAngle: "45deg",
    boxColor: '#C1E3D6',
    boxIndex: '1',
    };
    const boxProps2 = {
    boxPosition: 'absolute',
    boxWidth: "320px",
    boxHeight: "320px",
    boxTop: "544px",
    boxLeft: "499px",
    boxBorderRadius: "40px",
    boxAngle: "45deg",
    boxColor: '#C1E3D6',
    boxIndex: '1',
      };
    
      return (
        <>
          <Container>
            <Box {...boxProps1} /> 
            <Box {...boxProps2} /> 
      <Boxwrapper>
        <Title>Create An Account</Title>
        <Paragraph>Create an account to enjoy all the services <br /> 
            without any ads for free!</Paragraph>
            <Inputs placeholder="Email Address" onChange={event => {
                          return setEmail(event.target.value);
                      }}></Inputs>
            <Inputs placeholder="Password" onChange={event => {
                          return setPassword(event.target.value);
                      }}></Inputs>
            <Button onClick={handleCreate}>Create Account</Button>
            <Sign>Already Have An Account? <span onClick={handleSignIn} style={{ textDecoration: 'underline', cursor: 'pointer' }}>Sign In</span></Sign>
      </Boxwrapper>
      </Container>
    </>
  );
};

export default Signup;
