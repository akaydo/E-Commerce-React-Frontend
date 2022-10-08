import { Add, Remove } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import styledComponents from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { publicRequest } from '../requestMethods';
import { mobile } from '../responsive';
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styledComponents.div`

`;

const Wrapper = styledComponents.div`
    padding: 48px;
    display: flex;
    ${mobile({padding: "10px", flexDirection:"column"})}
`;

const ImgContainer = styledComponents.div`
    flex: 1;
`;

const Image = styledComponents.img`
    width: 100%;
    height: 80vh;
    object-fit: cover;
    ${mobile({height: "40vh"})}
`;

const InfoContainer = styledComponents.div`
    flex: 1;
    padding: 0px 40px;
    ${mobile({padding: "10px"})}
`;

const Title = styledComponents.h1`
    font-weight: 300;
`;

const Desc = styledComponents.p`
    margin: 20px 0px;
`;

const Price = styledComponents.span`
    font-weight: 200;
    font-size: 40px;
`;

const FilterContainer = styledComponents.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin: 28px 0px;
`;

const Filter = styledComponents.span`
    display: flex;
    align-items: center;
`;

const FilterTitle = styledComponents.span`
    font-size: 24px;
    font-weight: 300;
`;

const FilterColor = styledComponents.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 6px;
    cursor: pointer;
    border: 0.5px solid black;
`;

const FilterSize = styledComponents.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterSizeOption = styledComponents.option`

`;

const AddContainer = styledComponents.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    ${mobile({width: "100%"})}
`;

const AmountContainer = styledComponents.span`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styledComponents.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid #035e7b;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styledComponents.button`
    padding: 15px;
    border: 2px solid #035e7b;
    background-color: #fff;
    cursor: pointer;
    font-weight: 600;
    color:#035e7b;
    background-image: linear-gradient(to left,transparent,transparent 50%,#035e7b 50%,#035e7b);
    background-position: 100% 0;
    background-size: 200% 100%;
    transition: all .25s ease-in;

    &:hover{
        background-position: 0 0;
        color:#fff;
    }
`;

const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch();

    useEffect(()=>{
        const getProduct = async ()=>{
            try{
                const res = await publicRequest.get("/products/find/" + id);
                setProduct(res.data);
            }catch{}
        };
        getProduct()
    },[id]);

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity>1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    };

    const handleClick = () => {
        // редактирование корзины
        dispatch(
          addProduct({ ...product, quantity, color, size })
        );
      };

  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src={product.img}/>
            </ImgContainer>
            <InfoContainer>
                <Title>{product.title}</Title>
                <Desc>
                    {product.desc}
                </Desc>
                <Price>$ {product.price}</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        {product.color?.map((c)=>(
                            <FilterColor color={c} key={c} onClick={() => setColor(c)} />
                        ))}
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize onChange={(e) => setSize(e.target.value)}>
                            {product.size?.map((s) => (
                                <FilterSizeOption key={s}>{s}</FilterSizeOption>
                            ))}
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove onClick={()=>handleQuantity("dec")}/>
                        <Amount>{quantity}</Amount>
                        <Add onClick={()=>handleQuantity("inc")}/>
                        
                    </AmountContainer>
                    <Button onClick={handleClick}>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product