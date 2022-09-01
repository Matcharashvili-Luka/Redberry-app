import React from 'react';
import '../../../Style/New_Element_Page_Style/Person_info_elements_style/Dropdown_info.css';
import Position_info from './Position_info';

function Dropdown_info({ formData, setFormData }) {
  return (
    <div className='person_info_dropDowns'>
        <div className='person_info_team'>
            <input 
                list='items_team' 
                name='itemsTeam'
                placeholder='თიმი'
                value={formData.team} 
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
        <Position_info
            formData={formData}
            setFormData={setFormData}
        />
    </div>
  )
}

export default Dropdown_info