import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const Tabledata = () => {
    const [data,setdata]=useState([]);


    const LoadData=async()=>{
        try{
            const result=await Axios.get('http://localhost:3000/booking-table');
            console.log(result.data);
            console.log("Success!!!");
            setdata(result.data);
        }
        catch{
            console.log("error");
        }
    }


    useEffect(()=>{
        LoadData();
    },[]);

    const DeleteBooking=async(id)=>{
        const result=data.filter((val)=>val.id !==id)
        setdata(result);
        
        
        await Axios.delete(`http://localhost:3000/booking-table/${id}`);
    }
  return (
    <>
    
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-12'>
                <table className='table table-hover table-striped text-center'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Number Of People</th>
                            <th>Message</th>
                            <th>Delete </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((val)=>{
                                return(
                                    <tr key={val.id}>
                                        <td>{val.id}</td>
                                        <td>{val.name}</td>
                                        <td>{val.email}</td>
                                        <td>{val.phone}</td>
                                        <td>{val.date}</td>
                                        <td>{val.time}</td>
                                        <td>{val.people}</td>
                                        <td>{val.message}</td>
                                        <td><i class='bi bi-trash3-fill fw-bold text-danger'onClick={()=>{if(window.confirm('Are you sure ?')){DeleteBooking(val.id)}}}></i></td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </>
  )
}

export default Tabledata
