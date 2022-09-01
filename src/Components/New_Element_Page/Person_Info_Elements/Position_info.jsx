import React from 'react';
import '../../../Style/New_Element_Page_Style/Person_info_elements_style/Dropdown_info.css';

function Position_info({ formData, setFormData }) {
  return (
    <div className='person_info_position'>
        <input 
            list='items_position' 
            name='itemsPosition'
            placeholder='პოზიცია' 
            value={formData.position} 
            onChange={(e) => setFormData({...formData, position: e.target.value})}
        />
        <datalist id='items_position'>
            <option value="პოზიცია 1" />
            <option value="პოზიცია 2" />
            <option value="პოზიცია 3" />
            <option value="პოზიცია 4" />
            <option value="პოზიცია 5" />
        </datalist>
    </div>
  )
}

export default Position_info