import React from 'react';
import '../../../Style/New_Element_Page_Style/Person_info_elements_style/Dropdown_info.css';

function Dropdown_info({ formData, setFormData}) {
  return (
    <div className='person_info_dropDowns'>
        <div className='person_info_team'>
            <input 
                list='items_team' 
                placeholder='თიმი'
                value={formData.team} 
                onClick={() => setFormData({...formData, team: ''})}
                onChange={(e) => setFormData({...formData, team: e.target.value})}
            />
            <datalist id='items_team'>
                <option value="დეველოპმენტი" />
                <option value="HR" />
                <option value="გაყიდვები" />
                <option value="დიზაინი" />
                <option value="მარკეტინგი" />
            </datalist>
        </div>
        <div className='person_info_position'>
            <input 
                list='items_position' 
                placeholder='პოზიცია' 
                value={formData.position} 
                onClick={() => setFormData({...formData, position: ''})}
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
    </div>
  )
}

export default Dropdown_info