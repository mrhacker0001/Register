import React from 'react';
import { useForm } from 'react-hook-form';
import logo from "../assets/istockphoto-1312418673-612x612.jpg"
import "./Register.css"


function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className='Register'>

            <img src={logo} alt="" />

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='input-cart'>

                    <label>
                        <h1>First Name</h1>
                        <input
                            {...register('first_name', {
                                required: 'First Name is required',
                                minLength: {
                                    value: 3,
                                    message: 'First Name must be at least 3 characters'
                                },
                                pattern: {
                                    value: /^[A-Za-z]+$/i,
                                    message: 'First Name must contain only letters'
                                }
                            })}
                            placeholder="First Name"
                            type="text"
                        />
                        {errors.first_name && <p>{errors.first_name.message}</p>}
                    </label>


                    <label>

                        <h1>Last Name</h1>
                        <input
                            {...register('last_name', {
                                required: 'Last Name is required',
                                minLength: {
                                    value: 3,
                                    message: 'Last Name must be at least 3 characters'
                                },
                                pattern: {
                                    value: /^[A-Za-z]+$/i,
                                    message: 'Last Name must contain only letters'

                                }
                            })}
                            placeholder="Last Name"
                            type="text"
                        />
                        {errors.last_name && <p>{errors.last_name.message}</p>}
                    </label>

                    <label>
                        <h1>Phone Number</h1>
                        <input
                            {...register('phone_number', {
                                required: 'Phone Number is required',
                                pattern: {
                                    value: /^[0-9]{11}$/i,
                                    message: 'Invalid phone number (must be 9 digits)'
                                }
                            })}
                            placeholder="Phone Number"
                            type="text" // Type text ga o'zgartirildi
                            defaultValue="998" // Bosh qiymat 998 deb o'zgartirildi
                        />
                        {errors.phone_number && <p>{errors.phone_number.message}</p>}
                    </label>

                    <label>
                        <h1>Email</h1>
                        <input
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Invalid email address'
                                }
                            })}
                            placeholder="Email"
                            type="email"
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                    </label>

                    <label>
                        <h1>Password</h1>
                        <input
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 6, // Minimal uzunlik 6 ga o'zgartirildi
                                    message: 'Password must be at least 6 characters'
                                },
                                pattern: {
                                    value: /^[0-9]+$/i,
                                    message: 'Password must be at be only numbers'

                                }
                            })}
                            placeholder="Password"
                            type="text" // Type text ga o'zgartirildi
                        />
                        {errors.password && <p>{errors.password.message}</p>}
                    </label>
                    <button type="submit">Sign in</button>
                </div>
            </form>
        </div>
    );
}

export default Register;
