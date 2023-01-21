import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';


function Form() {
    const url ="http://13.233.173.87:8000/api/user/register/"
    const[data,setdata]=useState({
        email:"",
        name:"",
        password:"",

    })
    function handle(e){
        const newdata ={...data}
        newdata[e.target.id]=e.target.value
        setdata(newdata)
        console.log(newdata)

    }
    
    
  return (
   <>

    
            <form className='form' method='post' action='#' onSubmit={handle}>
            <div>
                    <label htmlFor='email'>Email</label>
                <input  onChange={(e)=> handle(e)} id="email" value={data.email} type="text" name="email"  ></input>
                </div>

                <div>
                    <label htmlFor='Name'>Name</label>
                <input onChange={(e)=> handle(e)} id="name" value={data.name} type="text" name="name" ></input>
                </div>

                <div>
                    <label htmlFor='password'>password</label>
                <input onChange={(e)=> handle(e)} id="password" value={data.password} type="text" name="email" ></input>
                </div>

                <div>
                    <label htmlFor='passwprd'> confirm password</label>
                <input onChange={(e)=> handle(e)} id="password" value={data.password} type="password" name="passw" ></input>
                </div>

                

                <button  
                type="submit" id='send' >
                
                Register</button>

                <div>
                <Link className="login" to="/login">
                  Go to  Login
                </Link>

                </div>
               
            </form>
            
        
    
    </>
  )
}

export default Form