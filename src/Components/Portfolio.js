import React from 'react'
import {Carousel} from 'react-bootstrap'
import image2 from './Images/bizapp.png'
import image3 from './Images/starwars.png'
import './Portfolio.css'




export const Portfolio = () => (
<Carousel>
  <Carousel.Item interval={6000}>
    <a href ='simplybiz.com'>
    <img
      className="d-block w-100"
      src={image2}
      alt="THIS IS MY PRJECT"
    />
    </a>
    <Carousel.Caption>
      <h3 className='biz'></h3>
      <p className='biz'>MERN Stack Application</p>
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
)