import React from 'react'
import {Container} from 'react-bootstrap'



export const Layout = (props) => (
    <Container className='cover'>
        {props.children}
    </Container>
)