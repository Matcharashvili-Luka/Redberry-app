import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main_Page from './Components/Main_Page/Main_Page';
import New_element_Page from './Components/New_Element_Page/New_element_Page';
import Elements from './Components/Elements/Elements';
import Single_element_detailed_info from './Components/Elements/Single_element_detailed_info';
import { v4 as uuidv4 } from 'uuid';

function App() {
  // store element id by clicking the element itself (for single element page);
  const[elementId, setElementId] = useState(0);

  // store value of search input;
  const[searchInp, setSearchInp] = useState('');

  // to change pages between person and lap info, when creating new element;
  const[page, setPage] = useState(0);

  // create and store data (if there is smth in l.storage return it. else data = [])
  const[data, setData] = useState(JSON.parse(localStorage.getItem('laptop_data')) || []);

  // update local storage data. once we add new element to data.
  useEffect(() => {
    localStorage.setItem('laptop_data', JSON.stringify(data));
  }, [data]);

  // create single element object
  const[formData, setFormData] = useState({
    id: '',
    name: '',
    lastName: '',
    team: '',
    position: '',
    email: '',
    mobNum: '',
    laptopName: '',
    laptopBrand: '',
    CPU: '',
    CpuCore: '',
    CpuThread: '',
    Ram: '',
    date: '',
    price: '',
    storage: '',
    condition: '',
  })

  //==========================================================
  //==================M--E--T--H--O--D--S=====================
  //==========================================================

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

  //-----------------------------------------------------------

  const emailValidation = (email) => {
    let idx = email.indexOf('@');
    if(idx === -1) return false;
    return email.slice(idx) === '@redberry.ge';
  }

  const mobileNumbervalidation = (number) => {
      // we use obj because it faster to find elements than in array.
      let map = { 
          1: true,
          2: true,
          3: true,
          4: true,
          5: true,
          6: true,
          7: true,
          8: true,
          9: true,
          0: true
      }

      number = number + '';
      number = number.replaceAll(/ /g, '');
      number = number.replace('+995', '');
      for(let i of number){  
        if(!map[i]) return false;
      }
      if(number[0] !== '5') return false;
      return number.length === 9;
  }

  //-----------------------------------------------------------
  let alert_message = '';

  const ifValidObj = (obj) => {
    if(validName(obj.name) === false){
      alert_message='მიუთითეთ ვალიდური სახელი! (2-ზე მეტი ელემენტი, ქართული ასოებით)';
      return false;
    }else if(validName(obj.lastName) === false){
      alert_message='მიუთითეთ ვალიდური გვარი! (2-ზე მეტი ელემენტი, ქართული ასოებით)';
      return false;
    }else if(emailValidation(obj.email) === false){
      alert_message='მიუთითეთ ვალიდური მეილი! (უნდა მთავრდებოდეს @redberry.ge-ზე)';
      return false;
    }else if(mobileNumbervalidation(obj.mobNum) === false){
      alert_message='მიუთითეთ ვალიდური ტელეფონის ნომერი! ((+995) - 9 სიმბოლო(ციფრი))';
      return false;
    }else if(obj.name === ''){
      alert_message='მიუთითეთ სახელი!';
      return false;
    }else if(obj.lastName === ''){
      alert_message='მიუთითეთ გვარი!';
      return false;
    }else if(obj.email === ''){
      alert_message='მიუთითეთ მეილი!';
      return false;
    }else if(obj.mobNum === ''){
      alert_message='მიუთითეთ მობილურის ნომერი!';
      return false;
    }else if(obj.team === ''){
      alert_message='მიუთითეთ გუნდი!';
      return false;
    }else if(obj.position === ''){
      alert_message='მიუთითეთ პოზიცია!';
      return false;
     }else if(obj.laptopName === ''){
      alert_message='მიუთითეთ ლეპტოპის სახელი!';
      return false;
    }else if(obj.laptopBrand === ''){
      alert_message='მიუთითეთ ლეპტოპის ბრენდი!';
      return false;
    }else if(obj.CPU === ''){
      alert_message='მიუთითეთ ლეპტოპის პროცესორი!';
      return false;
    }else if(obj.CpuCore === ''){
      alert_message='მიუთითეთ პროცესორის ბირთვების რაოდენობა!';
      return false;
    }else if(obj.CpuThread === ''){
      alert_message='მიუთითეთ პროცესორის ნაკადის რაოდენობა!';
      return false;
    }else if(obj.Ram === ''){
      alert_message='მიუთითეთ ლეპტოპის RAM!';
      return false;
    }else if(obj.date === ''){
      alert_message='მიუთითეთ შეძენის თარიღი!';
      return false;
    }else if(obj.price === ''){
      alert_message='მიუთითეთ ლეპტოპის ფასი!';
      return false;
    }else if(obj.condition === ''){
      alert_message='მიუთითეთ ლეპტოპის მდგომარეობა!';
      return false;
    }else if(obj.storage === ''){
      alert_message='მიუთითეთ ლეპტოპის მეხსიერების ტიპი!';
      return false;
    }else{
      return true;
    }
  }

  // submit new element
  const Submit = (el) => {
    setData([...data, el]);
  }

  const onSubmit = (el) => {
    if(ifValidObj(el) === true){
      formData.id = uuidv4(); // ამზე კარგი ვარიანტი დონთ ნოუ :)))
      alert('ინფორმაცია შენახულია');
      Submit(el);
      setFormData({
        ...formData,
        id: '', 
        name: '',
        lastName: '',
        team: '',
        position: '',
        email: '',
        mobNum: '',
        laptopName: '',
        laptopBrand: '',
        CPU: '',
        CpuCore: '',
        CpuThread: '',
        Ram: '',
        date: '',
        price: '',
        storage: '',
        condition: '',
      });
      setPage((prevPage) => prevPage - 1);
    }else{
      alert(alert_message);
    }
  }

  // to delete element from local storage;
  const deleteElement = (id) => {
    setData(data.filter((el) => el.id !== id));
  }

  //==========================================================
  //==========M--E--T--H--O--D--S____E--N--D==================
  //==========================================================

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' index element={<Main_Page />}/>
          <Route 
            path='/CreateNewElement' 
            element={
              <New_element_Page 
                formData={formData}
                setFormData={setFormData}
                onSubmit={onSubmit}
                page={page}
                setPage={setPage}

                validName={validName}
                emailValidation={emailValidation}
                mobileNumbervalidation={mobileNumbervalidation}
              />
            }
          />
          <Route 
            path='/Elements' 
            element={
              <Elements 
                data={data}
                elementId={elementId}
                setElementId={setElementId}
                setSearchInp={setSearchInp}
                searchInp={searchInp}
                deleteElement={deleteElement}
                id={elementId}
              />
            }
          />
          <Route 
            path={`/Elements/el-${elementId}`} 
            element={
              <Single_element_detailed_info 
                id={elementId}
                data={data}
                deleteElement={deleteElement}
              />
            }
          />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
