import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {

    const { _id, title, description, image,price } = service;

    return (
        <div className="col-md-4 g-4">
            <div class="card" style={{ width: "18rem" }}>
                <img src={image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h4 class="card-title">{title}</h4>
                    <p class="card-text">{description}</p>
                    <h3>Price: <span style={{color:"goldenrod"}}>{price}$</span></h3>
                    <Link to= {`/booking/${_id}`} >
                    <button className="btn btn-danger">Explore Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;