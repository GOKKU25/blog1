import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
const Login = () => {
    const [form,setForm]=useState({
        email:' ',
        password:' '
    })
    const navigate=useNavigate();
    function capValue(){
        // console.log(form);
    
    axios.post('/api/user/login',form).then((res)=>{
        alert(res.data.message);
        if(res.data.token){
            sessionStorage.setItem('logintoken',res.data.token);
            navigate('/blogs');
        }
        else{
            navigate('/');
        }
       
    }).catch((error)=>{
        alert('invalid login');
    
    })
}
    return (
        <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',height: '100vh', margin: '0',}}>
        <div style={{textAlign: 'center', margin: '2%', padding: '20px', border: '3px solid #000',borderRadius: '8px',
            boxShadow: '0 4px 8px rgb(240, 51, 51)',width:'30%' }}>
            <Typography gutterBottom variant="h5" component="div" color='red'>BLOG APP LOGIN</Typography><br /><br /><br /><br />
            <TextField label='Email' type='text' name='email' fullWidth margin="normal"  onChange={(e)=>{
                setForm({...form,email:e.target.value})
            }}/><br />
            <TextField label='Password' type='password' name='password' fullWidth margin="normal" onChange={(e)=>{
                setForm({...form,password:e.target.value})
            }}/><br /><br /><br/>
            <Button variant="outlined" onClick={capValue}>LOGIN</Button><br /><br />
            <div>
                <Link to={'/sign'}> New user ! please sign up</Link>
            </div>
        </div>
</div>
    )
}
export default Login


