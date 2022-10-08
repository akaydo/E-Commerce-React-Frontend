import { Facebook, Instagram, Mail, Phone, Room, Twitter } from '@mui/icons-material';
import React from 'react'
import styledComponents from 'styled-components'
import { mobile } from '../responsive';

const Container = styledComponents.div`
    display: flex;
    ${mobile({flexDirection: "column"})}
`;

const Left = styledComponents.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styledComponents.h1``;
const Desc = styledComponents.p`
    margin: 20px 0px;
`;
const SocialContainer = styledComponents.div`
    display: flex;
`;
const SocialIcon = styledComponents.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 18px;
`;

const Center = styledComponents.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})}
`;

const Title = styledComponents.h3`
    margin-bottom: 30px;
`;

const List = styledComponents.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styledComponents.li`
    width: 50%;
    margin-bottom: 8px;
`;

const ContactItem = styledComponents.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styledComponents.img`
    width: 60%;
`;

const Right = styledComponents.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "#e4eaf9"})};
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>DECO.</Logo>
                <Desc>Buy fashionable clothes online at the DECO online store! A huge selection of stylish women's and men's clothing, shoes and accessories from new collections.</Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Woman fashion</ListItem>
                    <ListItem>Man fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight:"8px"}}/>
                    838  Addison St. Arkington, 024769
                </ContactItem>
                <ContactItem><Phone style={{marginRight:"8px"}}/>
                    +1 234 56 78
                </ContactItem>
                <ContactItem><Mail style={{marginRight:"8px"}}/>
                    deko@gmail.ru
                </ContactItem>
                <Payment src="https://dentex.ru/upload/medialibrary/166/16642b2a50049d4bea5c26615ce89f6b.png"/>
            </Right>
        </Container>
    )
}

export default Footer