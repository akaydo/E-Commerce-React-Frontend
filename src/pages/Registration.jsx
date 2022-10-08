import React from 'react'
import styledComponents from 'styled-components'
import { mobile } from '../responsive';

const Container = styledComponents.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
    ), no-repeat center
    url("https://darshoes.ru/800/600/https/www.tapeteos.pl/data/media/899/big/anja_rubik_021.jpg");
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styledComponents.div`
    width: 40%;
    padding: 28px;
    background-color: #fff;
    border-radius: 12px;
    ${mobile({width: "75%"})};
`;

const Title = styledComponents.h1`
    font-size: 32px;
    font-weight: 500;
`;
    
const Form = styledComponents.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styledComponents.input`
    flex: 1;
    min-width: 40%;
    margin: 24px 10px 0px 0px;
    padding: 12px;
`;

const Agreement = styledComponents.span`
    font-size: 14px;
    margin: 20px 0px;
`;

const Button = styledComponents.button`
    width: 36%;
    padding: 18px 20px;
    border: none;
    cursor: pointer;
    color: white;
    background-color: #c29463;
    border-radius: 5px;
`;

const Registration = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="name"/>
                <Input placeholder="last name"/>
                <Input placeholder="username"/>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>
                <Agreement>
                    By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Registration