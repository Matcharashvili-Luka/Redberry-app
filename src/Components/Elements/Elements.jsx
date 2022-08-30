import React from 'react';
import Single_element_page from './Single_element_page';
import '../../Style/Elements_Style/Elements_style.css';
import { Link } from 'react-router-dom';

function Elements({ data, elementId, setElementId, setSearchInp, searchInp }) {
  return (
    <div className='elements_container'>
      <div className="search">
        <input type="text" onChange={(e) => setSearchInp(e.target.value)}/>
        <p>{elementId}</p>
      </div>
      <div className='data_container'>
        {data.filter((e) => {
          let fullName = e.name + e.lastName
          if(searchInp === ''){
            return e;
          }else if(fullName.toLowerCase().includes(searchInp.toLowerCase())){
            return e;
          }}).map((el) => {
            return (
              <div onClick={() => setElementId(el.id)} key={el.id}>
                <Link to={`/Elements/el-${el.id}`}>
                  <Single_element_page 
                    id={el.id}
                    name={el.name}
                    lastName={el.lastName}
                  />
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Elements