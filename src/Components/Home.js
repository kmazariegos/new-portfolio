import React from 'react'
import styled from 'styled-components'; 
import {Portfolio} from './Portfolio'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {Card, Image} from 'react-bootstrap'
import { FiMail } from 'react-icons/fi' 
import image from './Images/image.png'
import './Home.css'

const ContainerDiv = styled.div`
  background-image: url(${image});
  background-size: cover;
  background-color: #e6f0ea;
  display: flex;
  justify-content: center;
`

const InfoRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const InfoColumn = styled.div`
  display: flex;
  justify-content: center;
`;

const TextWrapper = styled.div`
  display: inline;
  justify-content: center;
`;

const TopLine = styled.div`
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  align-items: center;
  background-color: none;
  font-size: 15px;
  line-height: 30px;
  font-weight: 500;
  letter-spacing: 1.3px;
  margin-bottom: 16px;
  margin-left: 100px;
  margin-right: 100px;
`;


const Heading = styled.h1`
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  margin-top: 35px;
  font-size: 35px;
  /* line-height: 1.1; */
  font-weight: 300;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};
`;

const Subtitle = styled.p`
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  /* max-width: 440px; */
  margin-bottom: 35px;
  font-size: 20px;
  line-height: 30px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
`;

const Icons = styled.h2`
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  /* max-width: 440px; */
  margin-bottom: 35px;
  font-size: 45px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
`;



function Home() { 

  return(
    <ContainerDiv className='home-wrapper'>
        <InfoRow>
            <InfoColumn>
                <TextWrapper>
                    <TopLine></TopLine>
                    <Heading>KARLA MAZARIEGOS</Heading>
                    <Subtitle>Fullstack Web Developer</Subtitle>
                    <Icons>
                    <a href="https://github.com/kmazariegos" target="_blank">
                    <FaGithub/>
                    </a>
                    <a href="https://www.linkedin.com/in/karla-mazariegos/" target="_blank">
                    <FaLinkedin/>
                    </a>
                    <a href="https://www.linkedin.com/in/karla-mazariegos/" target="_blank">
                    <FiMail/>
                    </a>
                    </Icons>
                    <br></br>
                    <Subtitle>About</Subtitle>
                    <TopLine>Highly entrepreneurial problem-solver and software enthusiast motivated by bringing concepts to full fruition. 
                    Proven ability to successfully analyze an organization's business requirements, identify potential opportunities, and develop innovative solutions to enhance product revenue and user experience. 
                    Valuable in a variety of industries and fast-paced environments.</TopLine>
                    <TopLine>Grace Hopper 2020 Software Engineering Scholar – Virtual (2020)</TopLine>
                    <br></br> 
                    <br></br>
                    <br></br>
                    <Subtitle>Tech Skills</Subtitle>
                    <TopLine>
                    JavaScript | React | Redux | HTML | CSS | NodeJS | Express | MySQL | PostgreSQL | MongoDB | Flask | Restful API  Development | Mocha | Chai | GitHub | Jira | Postman 
                    </TopLine>
                    <br></br>
                    <Subtitle>Business Skills</Subtitle>
                    <TopLine>
                    Salesforce | Shopify | Amazon Seller Central | Google Analytics | Google Ads
                    Entrepreneurship | E-commerce | Brand Development | Operations Management | Strategic Planning | Supply Chain Management | Data Analysis | Online Marketing | B2B Marketing | Customer Acquisition | Account Management
                    </TopLine>
                    <br></br>
                    <Card.Body>
                    <Portfolio className="portfolio"></Portfolio>
                    </Card.Body>
                </TextWrapper>
            </InfoColumn>
        </InfoRow>
    </ContainerDiv>
  )
}

export default Home;