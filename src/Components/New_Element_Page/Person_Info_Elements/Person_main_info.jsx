import React, { useState } from 'react';
import '../../../Style/New_Element_Page_Style/Person_info_elements_style/Person_main_info.css'

function Person_main_info({ formData, setFormData }) {
    const[nameLen, setNameLen] = useState('');
    const[lastNameLen, setLastNameLen] = useState('');

    const validateGeorgian = (word) => {
        let chars = 'აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ' // მგონი ბოლოს სწორადაა... :/
        let map = {};
        // we use obj because it faster to find elements than in array.
        for(let i of chars){
            map[i] = true;
        }

        for(let i of word){
            if(!map[i]) return false;
        }
        return true;
    }

    let validName = (name) => {
        if(name.length < 2 || !validateGeorgian(name)) return false;
        return true
    }

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