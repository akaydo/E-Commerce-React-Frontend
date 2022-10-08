import React from 'react'
import { Link } from 'react-router-dom';
import styledComponents from 'styled-components'
import { mobile } from '../responsive';

const Container = styledComponents.div`
    flex: 1;
    margin: 4px;
    height: 84vh;
    position: relative;
`;
const Image = styledComponents.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({height: "35vh"})}
`;
const Info = styledComponents.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Title = styledComponents.h1`
    color: white;
    margin-botttom: 18px;
    font-weight: 700;
    text-shadow: 1px 0 1px gray, 
    0 1px 1px #4e495b, 
    -1px 0 1px gray, 
    0 -1px 1px gray;
`
const Button = styledComponents.button`
    border: none;
    padding: 10px;
    cursor: pointer;
    background-color: white;
    color: gray;
    font-weight: 600;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Link to={`/products/${item.category}`}>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
        </Link>
    </Container>
  )
}

export default CategoryItem