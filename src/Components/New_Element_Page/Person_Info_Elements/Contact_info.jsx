import React, { useState } from 'react';
import '../../../Style/New_Element_Page_Style/Person_info_elements_style/Contact_info.css';

function Contact_info({ formData, setFormData, emailValidation, mobileNumbervalidation}) {
    const[email, setEmail] = useState('');
    const[number, setNumber] = useState('');

  return (
    <div className='contact_info'>
        <div>
            <p className='header'>მეილი</p>
            <input 
                className={email.length === 0 ? 'normal_email' : emailValidation(email) ? 'valid_email' : 'invalid_email'}
                type="text" 
                min={2}
                placeholder='eduard.Shevardnadzes@redberry.ge'
                value={formData.email} 
                onChange={
                    (e) => {
                        setEmail(e.target.value);
                        setFormData({...formData, email: e.target.value});
                    }
                }
            />
            <p className='info'>უნდა მთავრდებოდეს @redberry.ge-ით.</p>
        </div>
        <div>
            <p className='header'>ტელეფონის ნომერი</p>
            <input 
                className={number.length === 0 ? 'normal_num' : mobileNumbervalidation(number) ? 'valid_num' : 'invalid_num'}
                type="text"
                placeholder='+995 598 00 07 01'
                value={formData.mobNum} 
                onChange={
                    (e) => {
                        setNumber(e.target.value);
                        setFormData({...formData, mobNum: e.target.value});
                    }
                }
            />
            <p className='info'>უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს.</p>
        </div>
    </div>
  )
}

export default Contact_info