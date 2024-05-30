import React, { useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const navigate = useNavigate();
  const msgRef = useRef();  
  const endpoint = 'https://logunathan.pythonanywhere.com' 
  const verify = async(ref,name,password)=>{
    console.log("inside verify",ref,name,password)
    var msg = ""
    
    if(name === ""){
      msg = "User name is required."
    }else if(password === ""){
      msg = "Password is required";
    }
    if(msg !== ""){
      console.log("worked",msg)
      ref.innerText = msg;
      ref.style.opacity = "1";
      setTimeout(()=>{
        ref.style.opacity="0";
      },2000)
      return false;
    }
    try{
      const response = await axios.post(endpoint+'/verify',{
        name : name,
        password : password,
      })
      console.log(response.data);
      if(response.data.result){
        console.log("wr")
        return true;
      }else{
        msg = "Username or Password is Invalid";
        console.log("worked",msg)
        ref.innerText = msg;
        ref.style.opacity = "1";
        setTimeout(()=>{
          ref.style.opacity="0";
        },2000)
        props.setLoginState(true);
        return true;
    }
    }catch(err){
      console.log("Some error occured");
      return false;
    }
  }
  

  return (
    <div id = 'login' className='box'>
      <h2 className='titles'>Signin</h2>
      <span ref={msgRef} className='errormsg' id='msg'>sdf</span>
      <form action="" className='formbox'>
        <input 
          className = 'inpbtn' 
          name='uname' 
          id="uname" 
          type="text" 
          placeholder='Enter Username' 
          autoFocus 
          autoComplete='off' 
          onChange={(eve)=>{ 
            props.setName(eve.target.value) 
          }} 
          /> 
        <input 
          className = 'inpbtn' 
          name='password' 
          id="password" 
          type="password" 
          placeholder='Enter Password'
          onChange={(eve)=>{
            props.setPassword(eve.target.value)
          }}
        />
        <button 
          className = 'inpbtn btn' 
          type="submit" 
          id='btn'
          onClick={async(eve)=>{
            eve.preventDefault();
            if(await verify(msgRef.current,props.name,props.password)){
              navigate('admin')
            }
          }}
        >Login
        </button>
      </form>
    </div>
  )
}

export default Login