import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';
import './PlaceOrder.css'

const PlaceOrder = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { user } = useAuth();

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div className=''>
            <form className='order-form' onSubmit={handleSubmit(onSubmit)}>

                <input placeholder='Name' defaultValue={user.displayName} {...register("Name")} />


                <input placeholder='email' defaultValue={user.email} {...register("Email", { required: true })} />

                {errors.email && <span className='error'>This field is required</span>}

                <input placeholder='Address' defaultValue="" {...register("Address")} />

                <input placeholder='City' defaultValue="" {...register("City")} />

                <input placeholder='Phone Number' defaultValue="" {...register("Phone Number")} />

                <input type="submit" />
            </form>

        </div>
    );
};

export default PlaceOrder;