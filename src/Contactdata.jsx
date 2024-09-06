import React, { useEffect, useState } from 'react'
import Axios  from 'axios';
import { NavLink } from 'react-router-dom';

const Contactdata = () => {


    const[data,setdata]=useState([]);
    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/contact';

    const LoadData=async()=>{

        try{
            const result=await Axios.get(API_URL);
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
    },[])



    // delete user


    const DeleteUser=async(id)=>{
        const result=data.filter((val)=>val.id !==id)
        setdata(result);
        
        
        await Axios.delete(`http://localhost:3000/contact/${id}`);
    }
  return (
    <>
            <div className="container-fluid">
                <div className='row'>
                    <div className='col-md-12'>
                        <table className='table table-hover table striped'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Subject</th>
                                    <th>Message</th>
                                    <th></th>
                                    <th></th>
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
                                                    <td>{val.subject}</td>
                                                    <td>{val.message}</td>
                                                    <td><i class='fa fa-trash fw-bold text-danger pe-auto'onClick={()=>{if(window.confirm('Are you sure ?')){DeleteUser(val.id)}}}></i></td>
                                                    <td><NavLink to={`/editcontact/${val.id}`}><i class='fa fa-edit fw-bold text-success pe-auto'></i></NavLink></td>
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

export default Contactdata;
