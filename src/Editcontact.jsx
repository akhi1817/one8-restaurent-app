import  Axios  from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Editcontact=()=>{

    let data1=useParams();
    console.log(data1);
   const  {id} =useParams();


   const Getdata=async()=>{

    const result=await Axios.get(`http://localhost:3000/contact/${id}`);
    console.log(result)
    console.log(result.data);

    setName(result.data.name);
    setEmail(result.data.email);
    setSubject(result.data.subject);
    setMessage(result.data.message);

   }
   useEffect(()=>{
    Getdata()
   })



// *****************************************************************************

            // const [data,setdata]=useState();
            const [name,setName]=useState();
            const [email, setEmail] = useState('');
            const [subject, setSubject] = useState('');
            const [message, setMessage] = useState('');


            
         
// *****************************************************************************



    return(
        <>
        <h1>EditContact component-{id}</h1>
        <div className='col-md-12 mt-5 p-5 form-control text-center'>
                        <form>
                            <div className='col-md-12 d-flex'>
                                <div className='col-md-6 px-3'>
                                
                                    <input type='text' className='form-control' placeholder='Update Your Name' value={name} onChange={(e)=>setName(e.target.value)}/>
                                 
                                </div>
                                <div className='col-md-6 px-3'>
                                    <input type='email' className='form-control' placeholder='Update Your Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                                   
                                </div>
                            </div>
                            <div className='col-md-12 mt-3 px-3'>
                                <input type='text' className='form-control' placeholder='Update your Subject' value={subject} onChange={(e)=>setSubject(e.target.value)} />
                               
                            </div>
                            <div className='col-md-12 mt-3 px-3'>
                                <textarea rows='5' cols='50'className='form-control' placeholder='Update your Message' value={message}  onChange={(e)=>setMessage(e.target.value)}></textarea>
                              
                            </div>
                            <div className='col-md-12 mt-3 px-3 text-center'>
                                <button className='btn btn-danger px-3 my-3 rounded-pill'> Send Message</button>
                            </div>
                        </form>
                    </div>
        </>
    )
}
export default Editcontact;