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

    const handleDelete = id => {

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {

                    fetch(`http://localhost:5000/deleteEvents/${id}`, {
                        method: "Delete",
                        headers: { "content-type": "application/json" },
                    }, [])
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount) {
                                const remaining = events.filter(event => event._id !== id);
                                setEvents(remaining);
                            }
                        })



                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your imaginary file is safe!");
                }
            });




    }


    return (
        <div>
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
                        <th scope="col">Action</th>


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
                                <button onClick={() => handleDelete(event._id)} className="btn btn-danger text-white" style={{ backgroundColor: "red" }}>Delete</button>

                            </tr>
                        </tbody>
                    ))
                }

            </Table>
        </div>
    );
};

export default MyOrder;