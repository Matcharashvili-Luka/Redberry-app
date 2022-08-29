import React from 'react';
import '../../../Style/New_Element_Page_Style/Laptop_info_elements_style/Laptop_pic.css';

function Laptop_pic({ formData, setFormData }) {
  return (
    <div className='laptop_img'>
        <input 
          id='file'
          type="file" 
          accept='image/*' 
          value={formData.img} 
          onChange={
            (e) => {
              setFormData({...formData, img: e.target.value});
            }
          }
        />
    </div>
  )
}

export default Laptop_pic