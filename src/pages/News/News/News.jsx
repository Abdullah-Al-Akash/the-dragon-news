import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaArrowLeft } from 'react-icons/fa';
import InsightEditors from '../InsightEditors/InsightEditors';

const News = () => {
    const specificNews = useLoaderData();
    const { details, title, image_url, category_id } = specificNews;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="danger"><FaArrowLeft></FaArrowLeft> All news in this category</Button>
                    </Link>
                </Card.Body>
            </Card>
            <InsightEditors></InsightEditors>
        </div>
    );
};

export default News;