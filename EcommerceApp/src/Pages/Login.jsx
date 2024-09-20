import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate();
  const[input,setInput] = useState({
    name:"",
    password:""
  })

  const handleLogin = (event) => {
    event.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if(input.name === loggedUser.name && input.password===loggedUser.password){
      navigate("/");
      alert("Login successful")
    }
    else{
      alert("Enter correct Username and Password")
    }
  }

  return (
    <>
       <div className='login-page' onSubmit={handleLogin}>
            <form className='login-main'>
                <h1 className='login-heading'>Login</h1>
                <div className='login-sec'>
                    <label className='login-label' htmlFor='userName'>Username:</label>
                    <input
                      name='name'
                      value={input.name}
                      onChange={(event)=>setInput({...input,[event.target.name] : event.target.value})} 
                      type="text"  
                      className='login-input'
                      id='userName'/>
                </div>
                <div className='login-sec'>
                    <label className='login-label' htmlFor='userPassword'>Password:</label>
                    <input
                      name='password'
                      value={input.password}
                      onChange={(event)=>setInput({...input,[event.target.name] : event.target.value})} 
                      type="password"  
                      className='login-input'
                      id='userPassword'/>
                </div>
                <div className='login-buttons'>
                    <input type="submit" className='button1'/>
                </div>

            </form>
       </div>
    </>
  )
}

export default Login
