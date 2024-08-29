import React, { useState } from 'react';
import Axios from 'axios';

const Tableform = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [people, setPeople] = useState('');
    const [message, setMessage] = useState('');

    const saveForm = async (e) => {
        e.preventDefault();

        const data = {
            name: name,
            email: email,
            phone: phone,
            date: date,
            time: time,
            people: people,
            message: message,
        };

        console.log('Submitted Data:', data);

        try {
            const response = await Axios.post('http://localhost:3000/booking-table', data);
            console.log('Response:', response.data);
            alert("Table booked successfully!");
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };

    return (
        <>
            <div className='container-fluid p-5 mt-5'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h4 className='text-secondary text-center'>Book A Table</h4>
                        <h1 className='text-dark text-center'>Book Your Stay With Us</h1>
                        <hr />
                        <div className='col-md-12 mt-5 p-5 form-control text-center'>
                            <form onSubmit={saveForm}>
                                <div className='col-md-12 d-flex px-3 my-3'>
                                    <div className='col-md-4 px-3'>
                                        <input type='text'className='form-control'placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)}/>
                                    </div>
                                    <div className='col-md-4 px-3'>
                                        <input type='email' className='form-control' placeholder='Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className='col-md-4 px-3'>
                                        <input type='number' className='form-control' placeholder='Your Phone' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                                    </div>
                                </div>
                                <div className='col-md-12 d-flex px-3 my-3'>
                                    <div className='col-md-4 px-3'>
                                        <input type='date' className='form-control' value={date} onChange={(e) => setDate(e.target.value)} />
                                    </div>
                                    <div className='col-md-4 px-3'>
                                        <input type='time' className='form-control' value={time}  onChange={(e) => setTime(e.target.value)} />
                                    </div>
                                    <div className='col-md-4 px-3'>
                                        <input type='number' className='form-control' placeholder='Number of People' value={people} onChange={(e) => setPeople(e.target.value)}/>
                                    </div>
                                </div>
                                <div className='col-md-12 px-3 my-3'>
                                    <textarea  rows='6'  cols='50' className='form-control'  placeholder='Message'  value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
                                </div>
                                <div className='col-md-12'>
                                    <button className='btn btn-danger text-light px-4 my-3 rounded-pill'> Book a Table </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tableform;

