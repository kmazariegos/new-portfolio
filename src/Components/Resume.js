import React from 'react'
import {Card} from 'react-bootstrap'
import styled from 'styled-components';
import './Resume.css'

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
  background-color: none;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  } 
`
const CardTemplate = styled.div`
  border-radius: 25px;
  box-shadow: 5px 5px 15px #89a0b0;
  width: 60rem;
  height: 90rem;
`

export const Resume = () => (
<>
<ContainerDiv>
<CardTemplate>
    <Card.Body>
      <Card.Title className="Main-title">Karla Mazariegos</Card.Title>
      <Card.Title className="Main-title"> Los Angeles, 90037  |  323.496.9311  |  mazariek@gmail.com  </Card.Title>
      <Card.Title className="Second-title">Education</Card.Title>
      <Card.Text> 
      Springboard Software Engineering Immersive – Los Angeles, CA (2020)
      </Card.Text>
      <Card.Text>
      Boston College – B.A., Communication & Marketing – Boston, MA (2015)
      </Card.Text>
      <Card.Title className="Second-title">Awards</Card.Title> 
      <Card.Text> 
      Grace Hopper 2020 Software Engineering Scholar – Virtual (2020)
      </Card.Text>
      <Card.Title className="Second-title">Skills & Abilities</Card.Title>
      <Card.Text> 
      JavaScript | Python | React | Redux | HTML | CSS | NodeJS | Express | SQL | PostgreSQL | MongoDB | Flask | Restful API   Development | Mocha | Chai | GitHub | Jira | Salesforce | Postman | Tableau | Excel | Entrepreneurship | E-commerce | Brand Development | Operations Management | Strategic Planning | Supply Chain Management | Amazon Seller Central | Shopify
      </Card.Text>
      <Card.Title className="Second-title">Experience</Card.Title>
      <Card.Text>
      Software Engineering Student, Springboard	2020 – 2020
      <ul className="list"> –	Completed a coding boot camp that covered key aspects of software engineering.
      <li>
       Worked on projects and practice exercises covering front-end web development, back-end web development, databases, data structures, algorithms, and testing
      </li>
      <li>
        Learned how to work on group coding projects with my peers & worked with an industry mentor on how to work professionally on a software development team
      </li>
      </ul>
      </Card.Text>
      <Card.Text>
      CEO/Founder, AutoimmuniTea	2018 – 2020
      <ul className="list"> –	Created a woman founded and led, innovative e-commerce company with a mission to raise awareness for autoimmune-related conditions.
      <li>
      Developed an e-commerce + manufacturing business distributed in Shopify, Amazon & Grocery stores nationwide
      </li>
      <li>
      Expert in Amazon Seller Central, back-end Shopify, and other retail space technologies 
       </li>
       <li>
       Managed all operations of the business and created a roadmap for overall success of the company
      </li>
      <li>
       Analyzed marketing information and translated it into strategic plans
      </li>
      <li>
      Cultivated a large customer base of which many have turned into regular buyers
      </li>
      <li>
      Converted a 15k investment into a 120k+ annual revenue stream within 12 months 
      </li>
      </ul>
      </Card.Text>
      <Card.Text>
      Sales & Marketing Account Coordinator, News America Marketing	2018– 2019
      <ul className="list">–	Responsible for managing large company accounts with significant retailers + CPG companies.
      <li>
      Processed orders and contracts, coordinated client presentations, approved invoicing, analyzed and translated IRI and Nielsen scanner data in Excel, and drafted proactive sales proposals
      </li>
      <li>
      Acted as a liaison between clients and internal departments, participated in sales calls and role-plays, built and maintained professional relationships, and handled production materials across a wide range of print, in-store, and digital marketing tactics
      </li>
      </ul>
      </Card.Text>
      <Card.Text>
      Real Estate Sales Associate, Charlesgate Realty Group	2015 – 2017
      <ul className="list">–	Worked with real estate investors on new developments in the Boston area.
      <li>
      Responsible for contract drafting, negotiating deals, market research, and client analysis
      </li>
      <li>
      Updated reports, database management, and coordinated with several teams involved in the buying process
      </li>
      </ul>
      </Card.Text>
    </Card.Body>
  </CardTemplate>
  </ContainerDiv>
  </>
)