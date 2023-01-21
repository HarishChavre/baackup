import React, { useState } from 'react'

function LoginForm() {
  const[email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  
     return (
   <>
   <div className='form'>
   <div>
                    <label htmlFor='email'>Email</label>
                <input type="text" name="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}} id="email"></input>
                </div>


    
    <div>
                    <label htmlFor='password'>password</label>
                <input type="text" name="email" value={password}onChange={(e)=>{setPassword(e.target.value)}} id="pass"></input>
                </div>

                <button  
                type="submit" id='send' >
                
                Login</button>
</div>
                </>
  )
}

export default LoginForm