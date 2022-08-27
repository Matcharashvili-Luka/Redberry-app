import React from 'react';
import { Link } from 'react-router-dom';
import IMG from './Redberry.jpg';
import '../../Style/Elements_Style/Main_page.css'

function Main_Page() {
  return (
    <div>
        <div className='mainIMG'>
            <img src={IMG} />
        </div>
        <div className='link_container'>
            <div className='main_page_button firts_button'>
                <Link to='/CreateNewElement'>
                    <button>ჩანაწერის დამატება</button>
                </Link>
            </div>
            <div className='main_page_button second_button'>
                <Link to='/Elements'>
                    <button>ჩანაწერების სია</button>
                </Link>   
            </div>
        </div>
    </div>
  )
}

export default Main_Page