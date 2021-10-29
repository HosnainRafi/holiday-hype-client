import React, { useEffect, useState } from 'react';
import Service from './Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                console.log(data);
            })
    }, [])

    return (
        <div className="my-4">
            <h1 className="text-center">Explore Bangladesh</h1>
            <div className="row container-fluid container mx-auto">
            {
                services.map(service => <Service
                    key={service._id}
                    service={service}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;