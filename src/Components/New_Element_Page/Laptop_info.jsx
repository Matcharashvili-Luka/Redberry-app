import React from 'react'

function Laptop_info({ formData, setFormData }) {
  return (
    <div>
        {/* <div>
            Laptop name:
            <input 
                required
                type="text" 
                value={formData.laptopName} 
                onChange={(e) => setFormData({...formData, laptopName: e.target.value})}
            />
        </div> */}
        <div className='laptop_img'>
            <input type="image" />
        </div>
        <div className="laptop_brand_info">

        </div>
        <div className="laptop_specs">

        </div>
        <div className="other_laptop_info">

        </div>
    </div>
  )
}

export default Laptop_info