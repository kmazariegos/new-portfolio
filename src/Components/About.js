import React from 'react'
import {Card, Image} from 'react-bootstrap'
import styled from 'styled-components';
import './About.css'
import springboard from './Images/springboard.png'
import auto from './Images/auto.png'

const ContainerDiv = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  padding-right: 50px;
  padding-left: 50px; 
  display: flex;
  justify-content: center;
  background-color: white;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  } 
`
const CardTemplate = styled.div`
  border-radius: 25px;
  box-shadow: 5px 5px 15px #89a0b0;
  width: 60rem;
  height: 50rem;
`

export const About = () => ( 
<ContainerDiv>
<CardTemplate>
    <Card.Body className="card-body">
      <Card.Title  className="Main-title">About</Card.Title>
      <Card.Text  className="about-blurb">
      My name is Karla Mazariegos, and I am an aspiring full-stack developer with an entrepreneurial spirit. Most of my projects are built using Javascript, React, MongoDB, and Express, but I can also work with many more stacks. 
      </Card.Text>
      <Card.Text className="about-blurb">
      Before pivoting into tech, I ran an e-commerce business (Autoimmuni-Tea), where I developed many important skills such as brand development, business management, and strategic planning. Building a business from scratch taught me how to think quickly on my feet and brainstorm more efficient processes.
      </Card.Text>
      <Card.Text className="about-blurb">
      Overall, I am a positive hard working person looking for opportunities to be of great support and resource to my team. 
      </Card.Text>
    </Card.Body>
    <Card.Body className="card-image">
      <a href="https://www.springboard.com/courses/software-engineering-career-track/"><Image alt="springboard" src={springboard} rounded  className='image'/></a>
      <a href="https://autoimmunitea.com/"><Image alt="autoimmunitea" src={auto} rounded className='image'/></a>
    </Card.Body>  
  </CardTemplate>
  </ContainerDiv>
)
