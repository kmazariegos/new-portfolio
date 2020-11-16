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
  height: 35rem;
`

export const About = () => ( 
<ContainerDiv>
<CardTemplate>
    <Card.Body className="card-body">
      <Card.Title  className="Main-title">About</Card.Title>
      <Card.Text  className="about-blurb">
      Highly entrepreneurial problem-solver and software enthusiast motivated by bringing concepts to full fruition. Proven ability to successfully analyze an 
      organization's business requirements, identify potential opportunities, a nd develop innovative solutions to enhance product 
      revenue and user experience. Valuable in a variety of industries and fast-paced environments.
      </Card.Text>
    </Card.Body>
    <Card.Body className="card-image">
      <a href="https://www.springboard.com/courses/software-engineering-career-track/"><Image alt="springboard" src={springboard} rounded  className='image'/></a>
      <a href="https://autoimmunitea.com/"><Image alt="autoimmunitea" src={auto} rounded className='image'/></a>
    </Card.Body>  
  </CardTemplate>
  </ContainerDiv>
)
