import React from 'react'
import {Carousel} from 'react-bootstrap'
import image2 from './Images/bizapp.png'
import image3 from './Images/starwars.png'
import image4 from './Images/imagess.png'
import image5 from './Images/flashcards.png'
import './Portfolio.css'




export const Portfolio = () => (
<Carousel>
<Carousel.Item interval={3000}>
    <a href ='https://pensive-edison-7e6169.netlify.app/'>
    <img
      className="d-block w-100"
      src={image5}
      alt="THIS IS MY PROJECT"
    />
    </a>
    <Carousel.Caption>
      <p>WedDev Flashcards App</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <a href ='https://github.com/kmazariegos/simply-biz'>
    <img
      className="d-block w-100"
      src={image2}
      alt="THIS IS MY PRJECT"
    />
    </a>
    <Carousel.Caption>
      <p>MERN Stack Application</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
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
  <Carousel.Item interval={3000}>
    <a href ='https://infallible-wilson-468d6d.netlify.app/'>
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
</Carousel>
)