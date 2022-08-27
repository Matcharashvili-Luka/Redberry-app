import React from 'react';
import '../../Style/New_Element_Page_Style/Person_info.css'
import Contact_info from './Person_Info_Elements/Contact_info';
import Dropdown_info from './Person_Info_Elements/Dropdown_info';
import Person_main_info from './Person_Info_Elements/Person_main_info';

function Person_info({ formData, setFormData }) {
  return (
    <div className='person_info_container'>
        <Person_main_info 
            formData={formData}
            setFormData={setFormData}
        />
        <Dropdown_info 
            formData={formData}
            setFormData={setFormData}
        />
        <Contact_info
            formData={formData}
            setFormData={setFormData} 
        />
    </div>
  )
}

export default Person_info