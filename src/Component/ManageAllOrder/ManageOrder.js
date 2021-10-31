import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import swal from 'sweetalert';

const ManageOrder = () => {
    const [events, setEvents] = useState([]);
    const [status, setStatus] = useState('pending');

    useEffect(() => {
        fetch('https://dry-lake-81295.herokuapp.com/allEvents')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])


    const handleDelete = id => {

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {

                    fetch(`https://dry-lake-81295.herokuapp.com/deleteEvents/${id}`, {
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



                    swal("Your file has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your file is safe!");
                }
            });
    }

    const handleUpdate = id => {
        setStatus('Approved');
        fetch(`https://dry-lake-81295.herokuapp.com/update/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(),
        },[])
            .then(res => res.json())
            .then(data => {
                console.log(data);
                window.location.reload();
                if (data.modifiedCount) {
                    swal("Congratulations!", "Your Order is Approved", "success");
                }
            })
    }


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
                        <th scope="col">Action</th>
                        <th scope="col">Confirm</th>


                    </tr>
                </thead>
                {
                    events.map((event, index) => (
                        <tbody key={event._id}>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{event?.destination}</td>
                                <td>{event?.name}</td>
                                <td>{event?.email}</td>
                                <td>{event?.travelDate}</td>
                                <td>{event?.address}</td>
                                <td>{event?.status}</td>
                                <td><button onClick={() => handleDelete(event._id)} className="btn btn-danger text-white" >Delete</button></td>
                                <td><button onClick={() => handleUpdate(event._id)} className="btn btn-primary">Pay Now</button></td>

                            </tr>
                        </tbody>
                    ))
                }

            </Table>
        </div>
    );
};

export default ManageOrder;