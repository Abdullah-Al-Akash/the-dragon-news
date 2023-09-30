import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    // Load Data from Server:
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <div>
            <h4>All Category</h4>
            <div className="mt-3">
                {
                    categories.map(category => <p
                        className='mt-4'
                        key={category.id}
                    >
                        <Link to={`/category/${category.id}`} className='text-decoration-none ps-4 text-dark fw-bold fs-6 '>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;