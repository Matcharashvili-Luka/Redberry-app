import React, { useState } from 'react';
import '../../../Style/New_Element_Page_Style/Person_info_elements_style/Person_main_info.css'

function Person_main_info({ formData, setFormData, validName }) {
    const[nameLen, setNameLen] = useState('');
    const[lastNameLen, setLastNameLen] = useState('');

  return (
    <div className='person_info_top'>
        <div>
            <p className='header'>სახელი</p>
            <input 
                className={nameLen.length === 0 ? 'normal_name' : validName(nameLen) ? 'valid_name' : 'invalid_name'}
                required
                type="text" 
                min={2}
                placeholder='გრიშა'
                value={formData.name} 
                onChange={
                    (e) => { 
                        setNameLen(e.target.value);
                        setFormData({ ...formData, name: e.target.value })
                    }
                }
            />
            <p className='info'>მინიმუმ 2 სიმბოლო, ქართული ასოები.</p>
        </div>
        <div>
            <p className='header'>გვარი</p>
            <input 
                className={lastNameLen.length === 0 ? 'normal_name' : validName(lastNameLen) ? 'valid_lastName' : 'invalid_lastName'}
                required
                type="text" 
                min={2}
                placeholder='ონიანი'
                value={formData.lastName} 
                onChange={
                    (e) => {
                        setLastNameLen(e.target.value)
                        setFormData({ ...formData, lastName: e.target.value })
                    }
                }
            />
            <p className='info'>მინიმუმ 2 სიმბოლო, ქართული ასოები.</p>
        </div>
    </div>
  )
}

export default Person_main_info