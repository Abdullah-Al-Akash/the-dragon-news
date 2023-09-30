import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png';


const RightNav = () => {
    return (
        <div>
            <h4 className="fw-bold">Login With</h4>
            <div className="d-grid gap-2 mt-4">
                <Button variant="outline-primary" size="lg">
                    <span className="me-2"> <FaGoogle /></span>Login With Google
                </Button>
                <Button variant="outline-dark" size="lg">
                    <span className="me-2"><FaGithub /></span>Login With GitHub
                </Button>
            </div>
            <div className="mt-4">
                <ListGroup>
                    <ListGroup.Item><FaFacebook></FaFacebook> <span className="ms-2">Facebook</span> </ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter><span className="ms-2">Twitter</span></ListGroup.Item>
                    <ListGroup.Item><FaLinkedin></FaLinkedin><span className="ms-2">LinkedIn</span></ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <img src={bg} alt="" className="w-100 mt-3" />
            </div>
        </div>
    );
};

export default RightNav;