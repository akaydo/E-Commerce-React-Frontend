import { FavoriteBorder, Search, ShoppingCartCheckout } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom';
import styledComponents from 'styled-components'
import { mobile } from '../responsive';

const Info = styledComponents.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.2);
    transition: all 0.5s ease;
    cursor: pointer;
    top: 0px;
    left: 0px;
    z-index: 3;
`;

const Container = styledComponents.div`
    flex: 1;
    margin: 5px;
    min-width: 285px;
    height: 360px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: #f1f1f3;
    ${mobile({height: "36vh"})};
    &:hover ${Info}{
        opacity:1;
    }
`;
const Image = styledComponents.img`
    height: 100%;
    z-index: 2;
`;

const Icon = styledComponents.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 8px;
    transition: all 0.5s ease;

    &:hover {
        background-color: white;
        transform: scale(1.1);
    }
`;
const handleClick = () => {
    // редактирование корзины
    dispatch(
      addProduct({ ...product, quantity, color, size })
    );
  };

const Product = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Icon onClick={handleClick}>

                <ShoppingCartCheckout/>
            </Icon>
            <Icon>
                <Link to={`/product/${item._id}`}>
                <Search/>
                </Link>
                
            </Icon>
            <Icon>
                <FavoriteBorder/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product