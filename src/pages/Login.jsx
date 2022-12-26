import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { Globalcontext } from '../components/Globalcontext';
const Login = () => {
  const {globalState, setGlobalState} = useContext(Globalcontext);
  const [uname, setUname] = useState();
  const [pass, setPass]=useState();
  const [status , setStatus] = useState(false);
  const [fail ,setFail] = useState(false);
  function submitClick (){
     axios.post('https://copper-puppy-garb.cyclic.app/api/auth/login',{
        username:uname,
        password:pass
     }).then(async (res)=>{
        setGlobalState({username:res.data.username,userId:res.data._id,accessToken:res.data.accessToken});
        setStatus(true);
        console.log(res);
     }).catch((err)=>{
        setFail(true);
        console.log(err)});
  }
  console.log(globalState);
  return (
    <div id='login'>
       <label htmlFor="uname">Username</label><br />
       <input type="text" id='uname' onChange={e=>setUname(e.target.value)} /><br /><br />
       <label htmlFor="pass">Password</label><br />
       <input type="password" id='pass'  onChange={e=>setPass(e.target.value)}/><br />
       <div id='ls' onClick={submitClick}>Submit</div>
       {status && (<>
        <span>Login sucessfull </span>
        <Link to='/shop'> Go To Shop</Link>
       </>)}
       {fail && <span style={{color:'red'}}>Invalid Username</span>}
       <br /><br />
       <span>Don't have an account </span>
       <Link to='/register'>Register Here</Link>
    </div>
  )
}

export default Login;