import React from 'react'
import styled from 'styled-components';
// import {ControlledCarousel} from './Carousel'
// import { Link } from 'react-router-dom';
// import {CardComp} from './Card'
// import {About} from './About'
// import {Contact} from './Contact'
import {Portfolio} from './Portfolio'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import image from './Images/image.png'
import {Button} from 'react-bootstrap'

const ContainerDiv = styled.div`
  /* z-index: 1;
  width: 100%; */
  /* max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;  */
  background-image: url(${image});
  background-size: cover;
  display: flex;
  justify-content: center;
  background-color: white;
  /* display: block; */

  /* @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  } */
`

const InfoRow = styled.div`
  display: flex;
  justify-content: center;
  /* margin: 0 -15px -15px -15px; */
  flex-wrap: wrap;
  /* align-items: center; */
  /* flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')}; */
`;

const InfoColumn = styled.div`
  display: flex;
  justify-content: center;
  /* margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  } */
`;

const TextWrapper = styled.div`
  display: inline;
  justify-content: center;
  /* max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  } */
`;

const TopLine = styled.div`
  /* display: inline-block; */
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  align-items: center;
  background-color: none;
  font-size: 15px;
  line-height: 20px;
  font-weight: 500;
  letter-spacing: 1.3px;
  margin-bottom: 16px;
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
  font-size: 30px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
`;



export const Home = (props) => (
    <ContainerDiv>
        <InfoRow>
            <InfoColumn>
                <TextWrapper>
                    <TopLine></TopLine>
                    <Heading>KARLA MAZARIEGOS</Heading>
                    <Subtitle>Fullstack Web Developer</Subtitle>
                    <Icons>
                    <a href="https://github.com/kmazariegos">
                    <FaGithub/>
                    </a>
                    <a href="https://www.linkedin.com/in/karla-mazariegos/">
                    <FaLinkedin/>
                    </a>
                    <a href="https://www.linkedin.com/in/karla-mazariegos/">
                    <FiMail/>
                    </a>
                    </Icons>
                    {/* <About></About> */}
                    <br></br>
                    <Subtitle>About</Subtitle>
                    <TopLine>Highly entrepreneurial problem-solver and software enthusiast motivated by bringing concepts to full fruition. 
                    Proven ability to successfully analyze an organization's business requirements, identify potential opportunities, a nd develop innovative solutions to enhance product revenue and user experience. 
                    Valuable in a variety of industries and fast-paced environments.</TopLine>
                    <TopLine>Grace Hopper 2020 Software Engineering Scholar – Virtual (2020)</TopLine>
                    <br></br>
                    {/* <Contact></Contact> */}
                    <br></br>
                    <br></br>
                    <Portfolio></Portfolio>
                    <br></br>
                    <Subtitle>Skills + Resume</Subtitle>
                    <TopLine>
                    <Button variant="primary">Resume</Button>
                    </TopLine>
                    <TopLine>
                    JavaScript | Python | React | Redux | HTML | CSS | NodeJS | Express | MySQL | PostgreSQL | MongoDB | Flask | Restful API  Development | Mocha | Chai | GitHub | Jira | Postman | Salesforce | Shopify | Amazon Seller Central | Google Analytics | Google Ads
                    Entrepreneurship | E-commerce | Brand Development | Operations Management | Strategic Planning | Supply Chain Management | Data Analysis | Online Marketing | B2B Marketing | Customer Acquisition | Account Management
                    </TopLine>
                    <br></br>
                </TextWrapper>
            </InfoColumn>
        </InfoRow>
    </ContainerDiv>
)
