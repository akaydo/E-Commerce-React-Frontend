import styled from "@emotion/styled";
import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from "@mui/icons-material"
import { useState } from "react";
import styledComponents from "styled-components"
import { sliderItems } from "../data"
import { mobile } from "../responsive";

const Container = styledComponents.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({display: "none"})}
`;

const Arrow = styledComponents.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.6;
    z-index: 2;
`;

const Wrapper = styledComponents.div`
    height: 100%;
    display: flex;
    transition: all 1.6s ease;
    transform:translateX(${(props)=>props.slideIndex * -100}vw);
`;

const Slide = styledComponents.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #${props => props.bg}
`;
const Image = styledComponents.img`
    height: 80%;
`;
const ImgContainer = styledComponents.div`
    flex: 1;
    height: 100%;
`;
const InfoContainer = styledComponents.div`
    flex: 1;
    padding: 48px;
`;

const Title = styledComponents.h1`
    font-size: 64px;
`
const Desc = styledComponents.p`
    margin: 48px 0;
    font-size: 18px;
    letter-spacing: 2px;
`
const Button = styledComponents.button`
    padding: 10px;
    font-size: 18px;
    background-color: transparent;
    cursor: pointer;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2 )
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    };

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <KeyboardArrowLeftOutlined></KeyboardArrowLeftOutlined>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item => (

                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>SHOW NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <KeyboardArrowRightOutlined></KeyboardArrowRightOutlined>
            </Arrow>
        </Container>
    )
}

export default Slider