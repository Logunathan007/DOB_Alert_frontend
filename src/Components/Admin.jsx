import React, { useEffect, useRef, useState } from 'react'

const Admin = (props) => {
  let [number,setNumber] = useState(0);
  const msgRef = useRef();
  let ls = 
    {
      name : "",
      dob : "",
    };
  useEffect(()=>{
    
  }
  ,[number])
    
  return (
      <div id = 'admin' className='box'>
      <h2 className='titles'>Home</h2>
      <span ref={msgRef} className='errormsg' id='msg'>sdf</span>
      <form action="" className='formbox' id="adminform">
        <input 
          className = 'inpbtn' 
          name='name' 
          id="name" 
          type='text'
          placeholder='Enter a name' 
          autoFocus 
          autoComplete='off' 
          onChange={(eve)=>{ 
            ls.name = eve.target.value
          }} 
          /> 
        <input 
          className = 'inpbtn' 
          name='dob' 
          id="dob" 
          type="date" 
          placeholder='Enter a Date'
          onChange={(eve)=>{
            ls.dob = eve.target.value
          }}
        />


        <h4 >Add Additional Information</h4>

        <button 
          className = 'inpbtn btn' 
          type="submit" 
          id='btn'
          onClick={async(eve)=>{
            console.log("Add Button is cliked");
            eve.preventDefault();
          }}
        >Add Data
        </button>
      </form>
    </div>
  )
}

export default Admin