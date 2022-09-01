import React from 'react';
import '../../../Style/New_Element_Page_Style/Laptop_info_elements_style/Laptop_brand_info.css';

function Laptop_brand_info({ formData, setFormData }) {
  return (
    <div className="laptop_brand_info">
        <div className="laptop_name">
          <p>ლეპტოპის სახელი</p>
          <input 
            type="text" 
            placeholder='Zenbook'
            value={formData.laptopName}
            onChange={
              (e) => {
                  setFormData({...formData, laptopName: e.target.value});
              }
            }
          />
        </div>
        <div className="laptop_brand">
          <p>ლეპტოპის ბრენდი</p>
          <input 
              list='items' 
              placeholder='Asus'
              value={formData.laptopBrand}
              onChange={
                (e) => {
                    setFormData({...formData, laptopBrand: e.target.value});
                }
              } 
          />
          <datalist id='items'>
              <option value="Asus" />
              <option value="Apple" />
              <option value="Acer" />
              <option value="Lenovo" />
              <option value="Hp" />
          </datalist>
        </div>
      </div>
  )
}

export default Laptop_brand_info