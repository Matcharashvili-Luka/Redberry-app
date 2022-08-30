import React from 'react';
import '../../../Style/New_Element_Page_Style/Laptop_info_elements_style/Laptop_pic.css';

function Laptop_pic() {
  return (
    <div className='laptop_img'>
        <p
          onClick={() => alert('ფოტოს ვერ ვინახავ, localstorage მხოლოდ string-ს ინახავს, სხვა გზა თქვენ მასწავლეთ :((')}
        >Upload Photo</p>
    </div>
  )
}

export default Laptop_pic