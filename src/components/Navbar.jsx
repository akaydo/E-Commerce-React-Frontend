import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react';
import styledComponents from 'styled-components';
import { Badge } from '@mui/material';
import {mobile} from "../responsive";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const Container = styledComponents.div`
    height: 60px;
    ${mobile({height: "48px"})}
`;
const Left = styledComponents.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styledComponents.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display: "none"})}

`;

const SearchContainer = styledComponents.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${mobile({marginLeft: "8px"})}
`;

const Input = styledComponents.input`
    border: none;
    ${mobile({width: "58px"})}
`;

const Center = styledComponents.div`
    flex: 1;
    text-align: center;
`;

const Logo = styledComponents.h1`
    font-weight: bold;
    ${mobile({fontSize: "24px"})}
`

const Right = styledComponents.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex: 2,justifyContent: "center"})}
`;

const Wrapper = styledComponents.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({padding: "10px 0px"})}
`;

const MenuItem = styledComponents.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 24px;
    ${mobile({fontSize: "12px", marginLeft: "8px"})}
`;

const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity)
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search style={{color:"gray", fontSize: 16}} />
                    </SearchContainer>
                </Left>
                <Center><Logo>DECO.</Logo></Center>
                <Right>
                    <Link to="/login">
                        <MenuItem>REGISTER</MenuItem>
                    </Link>
                    <Link to="/register">
                        <MenuItem>SIGN IN</MenuItem>
                    </Link>
                    
                    <Link to="/cart">
                    <MenuItem>
                    <Badge badgeContent={quantity} color="secondary">
                        <ShoppingCartOutlined color="action" />
                    </Badge>
                    </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar