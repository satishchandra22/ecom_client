import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { Globalcontext } from '../components/Globalcontext';

const Register = () => {
    const {globalState, setGlobalState} = useContext(Globalcontext);
    const [uname, setUname] = useState();
    const [pass, setPass]=useState();
    const [mail, setMail] = useState();
    const [status , setStatus] = useState(false);
    const [fail ,setFail] = useState(false);
    function submitClick (){
       axios.post('https://copper-puppy-garb.cyclic.app/api/auth/register',{
          username:uname,
          email:mail,
          password:pass
       }).then(async (res)=>{
          setGlobalState({username:res.data.username,userId:res.data._id,accessToken:res.data.accessToken});
          axios.post('https://copper-puppy-garb.cyclic.app/api/cart',{
            userId:res.data._id,
            products:[]
          }).then(()=>setStatus(true))
          console.log(res);
       }).catch((err)=>{
          setFail(true);
          console.log(err)});
    }
    console.log(globalState);
    return (
      <div id='register'>
         <label htmlFor="uname">Username</label><br />
         <input type="text" id='uname' onChange={e=>setUname(e.target.value)} /><br /><br />
         <label htmlFor="email">Email</label><br />
         <input type="text" id='email' onChange={e=>setMail(e.target.value)} /><br /><br />
         <label htmlFor="pass">Password</label><br />
         <input type="password" id='pass'  onChange={e=>setPass(e.target.value)}/><br />
         <div id='ls' onClick={submitClick}>Submit</div>
         {status && (<><span>Registration Sucessfull</span>
         <Link to='/login'>Go To Login</Link></>)}
         {fail && <span style={{color:'red'}}>Registration failed, Try again</span>}
      </div>
    )
}

export default Register