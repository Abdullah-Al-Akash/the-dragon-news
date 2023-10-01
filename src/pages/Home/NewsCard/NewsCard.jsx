import moment from 'moment';
import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, details, title, image_url, author, total_view, rating } = news;

    return (
        <Card className="m-3 p-2">
            <Card.Header>
                <div className='d-flex align-items-center'>
                    <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
                    <div className='ms-2 flex-grow-1'>
                        <p className='pt-2 mb-0'>{author?.name}</p>
                        <p><small className='mt-0'>{moment(author?.published_date).format('yyyy-MM-DD')}</small></p>
                    </div>
                    <div className=''>
                        <FaRegBookmark></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title className='pb-3'>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text className="mt-4">
                    {details.length < 250 ? <>{details}</> :
                        <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read More</Link></>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex">
                <div className="flex-grow-1">
                    <div className="d-flex">
                        <Rating
                            className='mt-1'
                            placeholderRating={rating?.number}
                            placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                            emptySymbol={<FaRegStar className="text-warning"></FaRegStar>}
                            fullSymbol={<FaStar></FaStar>}
                            readonly
                        />
                        <span><p className="pt-1 ms-2">{rating?.number}</p></span>
                    </div>
                </div>
                <div className="mt-1">
                    <FaEye></FaEye>
                    <span className="ms-2">{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;