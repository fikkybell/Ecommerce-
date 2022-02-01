import React from 'react'
import styled from 'styled-components'
import {ArrowLeftOutlined, ArrowRightOutlined} from '@material-ui/icons'
import { Slide } from '@material-ui/core';
import { useState } from 'react';
import { sliderItems } from '../data';


const Container = styled.div`
width: 100%;
height:100vh;
display:flex;
position: relative;
overflow: hidden;
`;

const Wrapper = styled.div`
height:100%;
display: flex;
transform: translateX(${(props)=>props.slideIndex
     * -100}vw);
    transition: all 1.5s ease;
`
const Arrow = styled.div`
width: 40px;
height:40px;
background-color: #fff7f7;
border-radius:50%;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
margin:auto;
cursor: pointer;
opacity: 0.5;
left: ${props=>props.direction === "left" && "10px"};
right: ${props=> props.direction === "right" && "10px"};
z-index:2;

`

const Slides = styled.div`
width: 100vw;
height: 100vh;
display:flex;
align-items:center;
background-color: #${props => props.bg}
`
const ImgContainer = styled.div`
flex:1;
height:100%
`
const Image = styled.img`
height:100%
flex:1;
`
const InfoContainer = styled.div`
flex:1;
padding: 50px;
`
const Title = styled.h1`
font-size: 70px;
`
const Description = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction)=> {
        if (direction === "left"){
            setSlideIndex(slideIndex > 1 ? slideIndex - 1: 2);
        } else {
            setSlideIndex(slideIndex > 2 ? slideIndex + 1 : 0);
        }
    }
    return (
        <div>
           <Container>
               <Arrow direction="left" onClick= {() => handleClick("left")}>
                   <ArrowLeftOutlined/>
               </Arrow>
               <Wrapper slideIndex= {slideIndex}>
                   {sliderItems.map((items) => (
                      <Slides bg = {items.bg}>
                      <ImgContainer>
                    <Image src={items.img}/>
                   </ImgContainer>
                   <InfoContainer>
                       <Title>
                          {items.title}
                       </Title>
                       <Description>{items.desc}</Description>
                       <Button>
                           SHOP NOW
                       </Button>
                   </InfoContainer>
                      </Slides>

                   ))}
                   

                   <Arrow direction= "right" onClick= {() => handleClick("right")}>
                   <ArrowRightOutlined/>
               </Arrow>
                  
               </Wrapper>
               </Container> 
        </div>
    )
}

export default Slider
