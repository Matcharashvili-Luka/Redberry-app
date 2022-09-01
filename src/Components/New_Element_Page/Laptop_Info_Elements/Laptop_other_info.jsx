import React from 'react';
import '../../../Style/New_Element_Page_Style/Laptop_info_elements_style/Laptop_other_info.css';

function Laptop_other_info({ formData, setFormData }) {
  return (
    <div className="other_laptop_info">
        <div className="purchase">
          <div className="date">
            <p>შეძენის რიცხვი (არჩევითი)</p>
            <input 
              type="date" 
              placeholder='16'
              value={formData.date} 
              onChange={
                (e) => {
                  setFormData({...formData, date: e.target.value});
                }
              }
            />
          </div>
          <div className="price">
            <p>ლეპტოპის ფასი (ლარი)</p>
            <input 
              type="number" 
              placeholder='2000'
              value={formData.price} 
              onChange={
                (e) => {
                  setFormData({...formData, price: e.target.value});
                }
              }
            />
          </div>
        </div>
        <div className="condition">
          <div className="new">
            <input 
              type="radio" 
              value='ახალი' 
              name='condition' 
              id='new_lap'
              onChange={
                (e) => {
                  setFormData({...formData, condition: e.target.value});
                }
              }
            />
            <label htmlFor='new_lap'>ახალი</label>
          </div>
          <div className="second_hand">
            <input 
              type="radio" 
              value='მეორადი' 
              name='condition' 
              id='sec_hand'
              onChange={
                (e) => {
                  setFormData({...formData, condition: e.target.value});
                }
              }
            />
            <label htmlFor='sec_hand'>მეორადი</label>
          </div>
        </div>
    </div>
  )
}

export default Laptop_other_info