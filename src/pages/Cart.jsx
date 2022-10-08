import { Add, Remove } from '@mui/icons-material';
import React from 'react'
import styledComponents from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import { mobile } from '../responsive';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const KEY = process.env.REACT_APP_STRIPE;

const Container = styledComponents.div`

`;

const Wrapper = styledComponents.div`
    padding: 20px;
    ${mobile({padding: "10px"})}
`;

const Title = styledComponents.h1`
    text-align: center;
    font-weight: 400;
`;

const Top = styledComponents.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px;
`;

const TopButton = styledComponents.button`
    cursor: pointer;
    padding: 10px;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};
`;

const TopTexts = styledComponents.div`
    ${mobile({display: "none"})}
`;

const TopText = styledComponents.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styledComponents.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})};
`;

const Product = styledComponents.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})};
`;

const ProductDetail = styledComponents.div`
    flex: 2;
    display: flex;
`;


const Image = styledComponents.img`
    width: 200px;
`;
const Details = styledComponents.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const ProductName = styledComponents.span`
    
`;
const ProductId = styledComponents.span`
    
`;
const ProductColor = styledComponents.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`;
const ProductSize = styledComponents.span`
    
`;

const Hr = styledComponents.hr`
    margin: 10px 0px;
    height: 1px;
    border: none;
    background-color: lightgray;
`;

const PriceDetail = styledComponents.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const ProductAmountContainer = styledComponents.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styledComponents.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({margin: "5px 15px"})};
`;

const ProductPrice = styledComponents.div`
    font-size: 28px;
    font-weight: 300;
    ${mobile({marginBottom: "20px"})};
`;
const Info = styledComponents.div`
    flex: 3;
`;

const Summary = styledComponents.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 48vh;
`;

const SummaryTitle = styledComponents.h1`
    font-weight: 300;
`;

const SummaryItem = styledComponents.div`
    margin: 24px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`;

const SummaryItemText = styledComponents.span`

`;

const SummaryItemPrice = styledComponents.span`

`;

const Button = styledComponents.button`
    width: 100%;
    padding: 10px;
    cursor: pointer;
    color: white;
    background-color: black;
    font-weight: 500;
`;

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const [stripeToken, setStripeToken] = useState(null);
    const history = useNavigate();

    const onToken = (token) => {
        setStripeToken(token);
      };

      useEffect(() => {
        const makeRequest = async () => {
          try {
            const res = await userRequest.post("/checkout/payment", {
              tokenId: stripeToken.id,
              amount: cart.total * 100,
            });
            history.push("/success", {
              stripeData: res.data,
              products: cart, });
          } catch {}
        };
        stripeToken && makeRequest();
      }, [stripeToken, cart.total, history]);
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
            <Link to="/">
                <TopButton>CONTINUE SHOPPING</TopButton>
                </Link>
                
                <TopTexts>
                    <TopText>Shopping Bag</TopText>
                    <TopText>Your Wishlist</TopText>
                </TopTexts>
                <TopButton type='filled'>CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                {cart.products.map((product) => (
                    <Product>
                        <ProductDetail>
                            <Image src={product.img}/>
                            <Details>
                                <ProductName><b>Product:</b> {product.title}</ProductName>
                                <ProductId><b>ID:</b> {product._id}</ProductId>
                                <ProductColor color={product.color}/>
                                <ProductSize><b>Size:</b> {product.size}</ProductSize>
                                </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>{product.quantity}</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$ {product.price * product.quantity}</ProductPrice>
                        </PriceDetail>
                    </Product>
                ))}
                <Hr/>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 4</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -4</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <StripeCheckout
                        name="DECO Shop"
                        image="https://www.studio5plus.ru/img/cart_ico.png"
                        billingAddress
                        shippingAddress
                        description={`Your total is $${cart.total}`}
                        amount={cart.total * 100}
                        token={onToken}
                        stripeKey={KEY}
                        
                    >
                    <Button>CHECKOUT NOW</Button>
                    </StripeCheckout>  
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  );
};

export default Cart;