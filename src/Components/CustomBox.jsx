import React from 'react';
import { IoMdCloseCircle } from 'react-icons/io';

const CustomBox = ({ ind, list, handleInputChange, setList, number, setNumber }) => {
  const handleRemove = () => {
    const temp = list.filter((_, i) => i !== ind);
    setList(temp);
    setNumber(number - 1);
  };

  return (
    <div className='custombox'>
      <div className='cros' onClick={handleRemove}>
        <IoMdCloseCircle />
      </div>
      <input
        className='inpbtn'
        type='text'
        placeholder='Enter a title'
        autoComplete='off'
        value={list[ind].title}
        required
        onChange={(e) => handleInputChange(ind, 'title', e.target.value)}
      />
      <textarea
        className='inpbtn'
        placeholder='Enter a description'
        autoComplete='off'
        value={list[ind].description}
        required
        onChange={(e) => handleInputChange(ind, 'description', e.target.value)}
      ></textarea>
    </div>
  );
};

export default CustomBox;
