import React from 'react';
import { useState, useEffect } from "react";
import { Table } from 'react-bootstrap';
import swal from 'sweetalert';
import useAuth from '../../Hooks/useAuth';


const MyOrder = () => {
    const [events, setEvents] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/myEvents/${user?.email}`)
            .then(res => res.json())
            .then(data => setEvents(data));
    }, [user.email]);

    


    return (
        <div className="container-fluid">
            <h2>My Events</h2>

            <Table striped bordered>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Destination</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">TravelDate</th>
                        <th scope="col">Address</th>
                        <th scope="col">Status</th>


                    </tr>
                </thead>
                {
                    events.map((event, index) => (
                        <tbody>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{event?.destination}</td>
                                <td>{event?.name}</td>
                                <td>{event?.email}</td>
                                <td>{event?.travelDate}</td>
                                <td>{event?.address}</td>
                                <td>{event?.status}</td>

                            </tr>
                        </tbody>
                    ))
                }

            </Table>
        </div>
    );
};

export default MyOrder;