import React, { useEffect, useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import Home from './home/Home';
import Content from './home/Content';
import { useNavigate } from "react-router-dom";
const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  let navigate = useNavigate();


  useEffect(() => {
    if (isSubmitted){
      navigate('/home')
    }
  }, [isSubmitted])

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='img/img-2.svg' alt='spaceship' />
        </div>
          <FormSignup submitForm={submitForm} />
        
      </div>
    </>
  );
};

export default Form;
