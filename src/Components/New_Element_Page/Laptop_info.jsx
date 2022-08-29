import React from 'react';
import '../../Style/New_Element_Page_Style/Laptop_info.css';
import Laptop_brand_info from './Laptop_Info_Elements/Laptop_brand_info';
import Laptop_other_info from './Laptop_Info_Elements/Laptop_other_info';
import Laptop_pic from './Laptop_Info_Elements/Laptop_pic';
import Laptop_specs_info from './Laptop_Info_Elements/Laptop_specs_info';

function Laptop_info({ formData, setFormData }) {
  return (
    <div className='laptop_info_container'>
      <Laptop_pic 
        formData={formData}
        setFormData={setFormData}
      />
      <Laptop_brand_info 
        formData={formData}
        setFormData={setFormData}
      />
      <Laptop_specs_info 
        formData={formData}
        setFormData={setFormData}
      />
      <Laptop_other_info 
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  )
}

export default Laptop_info