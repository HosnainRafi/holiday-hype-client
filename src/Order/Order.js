import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import swal from 'sweetalert';
import Services from '../Component/Services/Services';
import useAuth from '../Hooks/useAuth';

const Order = () => {
    const history = useHistory()
    const { user } = useAuth();
    const [service, setService] = useState({});
    const [status,setStatus] =useState('pending')
    const { serviceId } = useParams();

    useEffect(() => {
        fetch(`https://dry-lake-81295.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        data.destination = service?.title;
        data.status = status;
        fetch("https://dry-lake-81295.herokuapp.com/addEvent", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);
        history.push('/home')
        swal("Congratulation!", "You have register successfully", "success");
        reset();
    };


    return (
        <div className="container my-4">
            <h2 className="my-4 text-center">Explore {service?.title}</h2>
            <div className="row">
                <div className="col-md-6">
                    <div class="card border-3  mx-auto text-center" style={{ width: "18rem" }}>
                        <img src={service?.image} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h4 class="card-title">{service?.title}</h4>
                            <p class="card-text">{service?.description}</p>
                            <h3>Price: <span style={{ color: "goldenrod" }}>{service?.price}$</span></h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex flex-column align-items-start justify-content-center">
                    <form onSubmit={handleSubmit(onSubmit)} className="d-flex justify-content-center align-items center flex-column w-50 text-center mx-auto">

                        <input className="mb-2" placeholder="Enter Your Address" {...register("address", { required: true })} />

                        <input className="mb-2" placeholder="Enter the UserName" defaultValue={user?.displayName} {...register("name", { required: true, maxLength: 100 })} />
                        <input className="mb-2" type="email" placeholder="Enter Your email" defaultValue={user?.email} {...register("email", { required: true, maxLength: 100 })} />
                        <input className="mb-2" placeholder="Travel date" type="date"  {...register("travelDate", { required: true })} />
                        <input className="mb-2" placeholder="Current date" defaultValue={new Date()}  {...register("date", { required: true })} />

                        <input className="btn btn-warning text-white" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Order;