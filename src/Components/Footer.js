import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

export function Footer() {

    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        Karla Mazariegos
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                    <a href="https://github.com/kmazariegos">
                    <FaGithub/>
                    </a>
                    <a href="https://www.linkedin.com/in/karla-mazariegos/">
                    <FaLinkedin/>
                    </a>
                    <a href="https://www.linkedin.com/in/karla-mazariegos/">
                    <FiMail/>
                    </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;