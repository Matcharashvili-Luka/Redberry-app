import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main_Page from './Components/Main_Page/Main_Page';
import New_element_Page from './Components/New_Element_Page/New_element_Page';
import Elements from './Components/Elements/Elements';

function App() {
  // create and store data (if there is smth in l.storage return it. else data = [])
  const[data, setData] = useState(JSON.parse(localStorage.getItem('Laptop_Data')) || []);

  // update local storage data. once we add new element to data.
  useEffect(() => {
    localStorage.setItem('Laptop_Data', JSON.stringify(data));
  }, [data]);

  // create single element object
  const[formData, setFormData] = useState({
    name: '',
    lastName: '',
    team: '',
    position: '',
    email: '',
    mobNum: '',
    img: '',
    laptopName: '',
    laptopBrand: '',
    CPU: '',
    CpuCore: 0,
    CpuThread: 0,
    date: '',
    price: '',
    condition: '',
  })

  // submit new element
  const onSubmit = (el) => {
    setData([...data, el]);
    formData.name = '';
    formData.email = '';
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Main_Page />}/>
        </Routes>
        <Routes>
          <Route 
            path='/CreateNewElement' 
            element={
              <New_element_Page 
                formData={formData}
                setFormData={setFormData}
                data={data}
                setData={setData}
                onSubmit={onSubmit}
              />
            }
          />
        </Routes>
        <Routes>
          <Route 
            path='/Elements' 
            element={
              <Elements 
              />
            }
          />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
