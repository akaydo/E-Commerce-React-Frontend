import React from 'react'
import styledComponents from 'styled-components'
import { mobile } from '../responsive';
import { useState } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

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
    width: 25%;
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
    flex-direction: column;
`;

const Input = styledComponents.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 12px;
`;

const Link = styledComponents.a`
    margin: 8px 0px;
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
`;

const Error = styledComponents.span`
  color: red;
`;

const Button = styledComponents.button`
    width: 36%;
    padding: 18px 20px;
    border: none;
    cursor: pointer;
    color: white;
    background-color: #c29463;
    border-radius: 5px;
    margin-bottom: 10px;
    &:disabled {
        color: green;
        cursor: not-allowed;
      }
`;

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);
  
    const handleClick = (e) => {
      e.preventDefault();
      login(dispatch, { username, password });
    };
    return (
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleClick} disabled={isFetching}>
              LOGIN
            </Button>
            {error && <Error>Something went wrong...</Error>}
            <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
          </Form>
        </Wrapper>
      </Container>
    );
  };
  
  export default Login;