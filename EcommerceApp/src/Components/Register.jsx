import React,{useState}from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate=useNavigate();
    const[input,setInput] = useState({
        name:"",
        email:"",
        password:""
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem("user" , JSON.stringify(input));
        navigate("/login")
    }
  return (
   <>
     <div className='login-page'>
     <form className='login-main' onSubmit={handleSubmit}>
        <h1 className='login-heading'>Register</h1>
        <div className='login-sec'>
            <label htmlFor="userName" className='login-label'>Enter Your Name:</label>
            <input
                name='name'
                value={input.name}
                onChange={(event)=>setInput({...input,[event.target.name] : event.target.value})} 
                type="text" 
                className='login-input' 
                id='userName'/>
        </div>
        <div className='login-sec'>
            <label htmlFor="userEmail" className='login-label'>Enter Your Email:</label>
            <input
                name='email'
                value={input.email}
                onChange={(event)=>setInput({...input,[event.target.name] : event.target.value})} 
                type="email" 
                className='login-input' 
                id='userEmail'/>
        </div>
        <div className='login-sec'>
            <label htmlFor="userPassword" className='login-label'>Enter Your Password:</label>
            <input
                name='password'
                value={input.password}
                onChange={(event)=>setInput({...input,[event.target.name] : event.target.value})} 
                type="password" 
                className='login-input' 
                id='userPassword'/>
        </div>
        <div className='login-sec'>
            <input 
                type="submit" 
                className='button1' 
                style={{padding:"10px 25px" , marginTop:"10px"}} 
                value="Register"/> 
        </div>
      </form>
     </div>
   </>
  )
}

export default Register
