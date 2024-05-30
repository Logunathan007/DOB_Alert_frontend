import React, { useEffect, useState } from 'react';
import CustomBox from './CustomBox';
import axios from 'axios';

const Admin = (props) => {
  const endpoint = 'https://logunathan.pythonanywhere.com' 
  const [number, setNumber] = useState(0);
  const [list, setList] = useState([]);
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  useEffect(() => {
    if (number > list.length) {
      const temp = [...list];
      for (let i = list.length; i < number; i++) {
        temp.push({ title: '', description: '' });
      }
      setList(temp);
    }
  }, [number, list]);

  const handleInputChange = (index, field, value) => {
    const temp = [...list];
    temp[index][field] = value;
    setList(temp);
  };
  const sendRequest = async()=>{
    let obj = {
      name,
      dob,
    }
    list.forEach(ele=>{
      obj[ele.title] = ele.description;
    })
    console.log(obj);

    try{
      const response = await axios.post(endpoint+'/addnew',obj)
      console.log(response.data);
      if(response.data.result){
        return true;
      }
    }catch(err){
      console.log("Some error occured");
      return false;
    }
  }
  return (
    <div id='admin' className='box'>
      <h2 className='titles'>Home</h2>
      <span className='errormsg' id='msg'>sdf</span>
      <form action='' className='formbox' id='adminform'>
        <input
          className='inpbtn'
          name='name'
          id='name'
          type='text'
          value={name}
          placeholder='Enter a name'
          autoFocus
          autoComplete='off'
          onChange={(eve) => {
            setName(eve.target.value);
          }}
        />
        <input
          className='inpbtn'
          name='dob'
          id='dob'
          type='date'
          value={dob}
          placeholder='Enter a Date'
          onChange={(eve) => {
            setDob(eve.target.value);
          }}
        />
        {list.map((obj, ind) => (
          <CustomBox
            key={ind}
            ind={ind}
            list={list}
            handleInputChange={handleInputChange}
            setList={setList}
            number={number}
            setNumber={setNumber}
          />
        ))}
        <h4
          onClick={() => {
            setNumber(number + 1);
          }}
        >
          Add Additional Information
        </h4>
        <button
          className='inpbtn btn'
          type='submit'
          id='btn'
          onClick={(eve) => {
            console.log('Add Button is clicked');
            eve.preventDefault();
            sendRequest()            
          }}
        >
          Add Data
        </button>
      </form>
    </div>
  );
};

export default Admin;
