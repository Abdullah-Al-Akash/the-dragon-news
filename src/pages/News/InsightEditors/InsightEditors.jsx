import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import image1 from '../../../assets/1.png';
import image2 from '../../../assets/2.png';
import image3 from '../../../assets/3.png';
import { FaCalendar } from 'react-icons/fa';

const InsightEditors = () => {
    return (
        <div className='mt-4'>
            <h3 className='pb-2'>Editors Insight</h3>
            <Row xs={1} md={3} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={image1} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text>
                                <FaCalendar></FaCalendar> Jan 4, 2022
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={image2} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text>
                                <FaCalendar></FaCalendar> Jan 4, 2022
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={image3} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text>
                                <FaCalendar></FaCalendar> Jan 4, 2022
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </div>

    );
};

export default InsightEditors;