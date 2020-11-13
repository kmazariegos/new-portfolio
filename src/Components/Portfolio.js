import React from 'react'
import {Carousel} from 'react-bootstrap'
import image2 from './Images/1.png'
import image3 from './Images/starwars.png'
// import styled from 'styled-components';

// const ContainerDiv = styled.div`
//   z-index: 1;
//   width: 100%;
//   max-width: 1300px;
//   margin-right: auto;
//   margin-left: auto;
//   padding-right: 50px;
//   padding-left: 50px; 
//   display: flex;
//   justify-content: center;
//   background-color: pink;
//   display: block; 
//  @media screen and (max-width: 991px) {
//     padding-right: 30px;
//     padding-left: 30px;
//   } 
// `



export const Portfolio = () => (
<>
<Carousel>
  <Carousel.Item interval={6000}>
    <a href ='https://react-starwarsly-app.netlify.app/'>
    <img
      className="d-block w-100"
      src={image2}
      alt="THIS IS MY PRJECT"
    />
    </a>
    <Carousel.Caption>
      <h3>SimplyBiz App</h3>
      <p>MERN Stack Application</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={6000}>
    <a href ='https://react-starwarsly-app.netlify.app/'>
    <img
      className="d-block w-100"
      src={image3}
      alt="THIS IS MY PRJECT"
    />
    </a>
    <Carousel.Caption>
      <h3>Starwarsly</h3>
      <p>React Application</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</>
)