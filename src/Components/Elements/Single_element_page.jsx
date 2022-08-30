import React from 'react';
import '../../Style/Elements_Style/Single_element_style.css';
import Single_element_detailed_info from './Single_element_detailed_info';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Single_element_page({ id, name, lastName }) {
  return (
    <div>
      <div className='single_element_container'>
          <p>{name}</p>
          <p>{lastName}</p>
      </div>    
    </div>
  )
}

export default Single_element_page