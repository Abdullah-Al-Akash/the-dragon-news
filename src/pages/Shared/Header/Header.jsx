import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment/moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <Container className="pt-5">
            <div className="text-center">
                <img src={logo} alt="" />
                <p className="mt-3">Journalism Without Fear or Favour</p>
                <p>{moment().format('MMMM D, YYYY')}</p>
            </div>
            <div className="d-flex bg-body-tertiary p-4">
                <Button variant="danger">Latest</Button>{' '}
                <Marquee className="ps-2 text-danger fw-bold" speed={70}>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Marquee>
            </div>
            <div>
                <Navbar collapseOnSelect expand="lg" className="">
                    <Container>

                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Link href="#features">Home</Nav.Link>
                                <Nav.Link href="#pricing">About</Nav.Link>
                                <Nav.Link href="#pricing">Career</Nav.Link>

                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets">Profile</Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                    <Button variant='dark'>Login</Button>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </Container>
    );
};

export default Header;