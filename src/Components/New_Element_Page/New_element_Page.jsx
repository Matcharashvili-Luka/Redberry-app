import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Laptop_info from './Laptop_info';
import Person_info from './Person_info';
import '../../Style/New_Element_Page_Style/New_element_page.css';

function New_element_Page({ 
  formData, setFormData, onSubmit, validName, emailValidation, mobileNumbervalidation, page, setPage 
}) {
  // page headers
  const form_titles = ['თანამშრომლის ინფო', 'ლეპტოპის მახასიათებლები'];

  // returns page by the page number
  const displayPage = () => {
    if(page === 0){
      return (
        <Person_info 
          formData={formData} 
          setFormData={setFormData}

          validName={validName}
          emailValidation={emailValidation}
          mobileNumbervalidation={mobileNumbervalidation}
        />
      )
    }else{
      return (
        <Laptop_info 
          formData={formData} 
          setFormData={setFormData}
        />
      )
    }
  }

  return (
    <div>
      <div className='new_element_page_header'>
        <p 
          className={page === 0 ? 'first_page' : '...'}
          onClick={() => { setPage(0) }}
        >
          {form_titles[0]}
        </p>
        <div className='homeButton'>
          <Link to='/'>
            <i className="fa-solid fa-house"></i>
          </Link>
        </div>
        <p 
          className={page === 1 ? 'second_page' : '...'}
          onClick={() => { setPage(1) }}
        >
          {form_titles[1]}
        </p>
      </div>
      <div className='new_element_page_contaier'>
        <div>
          {displayPage()}
        </div>
        <div className='new_element_page_buttons'>
          <button 
            className={page === 0 ? 'desabled_prev_btn' : 'enabled_prev_btn'}
            disabled={page === 0}
            onClick={() => {
              setPage((prevPage) => prevPage - 1)
            }}
          >წინა</button>
          <button 
            className={page === 1 ? 'desabled_next_btn' : 'enabled_next_btn'}
            onClick={() => {
              if(page === 1){
                onSubmit(formData);
              }else{
                setPage((prevPage) => prevPage + 1);
              }
            }}
          >
            {page === 1 ? 'დამახსოვრება' : 'შემდეგი'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default New_element_Page; 