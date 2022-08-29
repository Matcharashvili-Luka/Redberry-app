import React from 'react';
import '../../../Style/New_Element_Page_Style/Laptop_info_elements_style/Laptop_specs_info.css';

function Laptop_specs_info({ formData, setFormData }) {
  return (
    <div className="laptop_specs">
        <div className="laptop_spect_upper_section">
          <div className="cpu_slect">
            <input 
                list='cpu' 
                placeholder='CPU' 
                value={formData.CPU} 
                onChange={
                  (e) => {
                    setFormData({...formData, CPU: e.target.value});
                  }
                }
            />
            <datalist id='cpu'>
                <option value="i3-11064G3" />
                <option value="i5-10704" />
                <option value="i7-1165G7" />
                <option value="i9-9090u" />
                <option value="i11-9909U8" />
                <option value="Ryzen-5500u" />
            </datalist>
          </div>
          <div className="cpu_core">
            <p>CPU-ს ბირთვი</p>
            <input 
              type="number" 
              placeholder='6'
              value={formData.CpuCore} 
              onChange={
                (e) => {
                  setFormData({...formData, CpuCore: e.target.value});
                }
              }
            />
          </div>
          <div className="cpu_threads">
            <p>CPU-ს ნაკადი</p>
            <input 
              type="number" 
              placeholder='8'
              value={formData.CpuThread} 
              onChange={
                (e) => {
                  setFormData({...formData, CpuThread: e.target.value});
                }
              }
            />
          </div>
        </div>
        <div className="laptop_spect_lower_section">
          <div className="ram_select">
            <p>ლეპტოპის RAM (GB)</p>
            <input 
              type="number" 
              placeholder='16'
              value={formData.Ram} 
              onChange={
                (e) => {
                  setFormData({...formData, Ram: e.target.value});
                }
              }
            />
          </div>
          <div className="storage_slect">
            <div className="ssd_storage">
              <input 
                type="radio" 
                value='ssd'
                id='sdd_select'
                name='storage'
                onChange={
                  (e) => {
                    setFormData({...formData, storage: e.target.value});
                  }
                }
              />
              <label htmlFor="sdd_select">SSD</label>
            </div>
            <div className="hdd_storage">
              <input 
                type="radio" 
                value='hdd'
                id='hdd_select'
                name='storage'
                onChange={
                  (e) => {
                    setFormData({...formData, storage: e.target.value});
                  }
                }
              />
              <label htmlFor="hdd_select">HDD</label>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Laptop_specs_info