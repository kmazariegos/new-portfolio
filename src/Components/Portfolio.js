import React from 'react'
import {Carousel, Card} from 'react-bootstrap'
import image2 from './Images/bizapp.png'
import image3 from './Images/starwars.png'
import image4 from './Images/imagess.png'
import image5 from './Images/flashcards.png'
import image6 from './Images/ait.png'
import './Portfolio.css'




export const Portfolio = () => (
<Card.Body>
<Carousel>
<Carousel.Item interval={3000}>
    <a href ='https://pensive-edison-7e6169.netlify.app/' target="blank">
    <img
      className="d-block w-100"
      src={image5}
      alt="Flashcards project"
    />
    </a>
    <Carousel.Caption>
      <p>WedDev Flashcards App</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <a href ='https://suspicious-easley-15f710.netlify.app/' target="blank">
    <img
      className="d-block w-100"
      src={image2}
      alt="SimplyBiz"
    />
    </a>
    <Carousel.Caption>
      <p>MERN Stack Application</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <a href ='https://react-starwarsly-app.netlify.app/' target="blank">
    <img
      className="d-block w-100"
      src={image3}
      alt="Star wars"
    />
    </a>
    <Carousel.Caption>
      <h3>Starwarsly</h3>
      <p>React Application</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <a href ='https://infallible-wilson-468d6d.netlify.app/' target="blank">
    <img
      className="d-block w-100"
      src={image4}
      alt="TO-DO APP"
    />
    </a>
    <Carousel.Caption>
      <h3>TO-DO LIST APP</h3>
      <p>React Application</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <a href ='https://autoimmunitea.com/' target="blank">
    <img
      className="d-block w-100"
      src={image6}
      alt="AutoimmuniTea"
    />
    </a>
    <Carousel.Caption>
      <h3>E-commerce Business</h3>
      <p>Founder of AutoimmuniTea: Find us at Erewhon & Amazon</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Card.Body>
)