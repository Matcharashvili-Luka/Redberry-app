import React from 'react';
import '../../Style/Elements_Style/Single_element_style.css';

function Single_element_page({ name, lastName }) {
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