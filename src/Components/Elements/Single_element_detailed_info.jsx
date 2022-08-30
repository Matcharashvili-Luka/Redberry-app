import React from 'react';
import { Link } from 'react-router-dom';
import '../../Style/Elements_Style/Single_element_detailed_info_style.css';

function Single_element_detailed_info({ id, data, deleteElement }) {
    let element = data.find((el) => el.id === id);

  return (
    <div className='detailed_info_container'>
        <div className="main_info_detailed">
            <div className="left_subSection">
                pic here
            </div>  
            <div className="right_subSection">
                <div className="keys">
                    <p>სახელი:</p>
                    <p>თიმი:</p>
                    <p>პოზიცია:</p>
                    <p>მეილი:</p>
                    <p>ტელ.ნომერი:</p>
                </div>
                <div className="values">
                    <p>{element.name} {element.lastName}</p>
                    <p>{element.team}</p>
                    <p>{element.position}</p>
                    <p>{element.email}</p>
                    <p>+995 {element.mobNum.slice(0, 3)} {element.mobNum.slice(3, 5)} {element.mobNum.slice(5, 7)} {element.mobNum.slice(7, 9)}</p>
                </div>
            </div>
        </div>
        <div className="laptop_info_detailed">
            <div className="left_subSection">
                <div className="keys">
                    <p>ლეპტოპის სახელი:</p>
                    <p>ლეპტოპის ბრენდი:</p>
                    <p>RAM:</p>
                    <p>მეხსიერების ტიპი:</p>
                </div>
                <div className="values">
                    <p>{element.laptopName}</p>
                    <p>{element.laptopBrand}</p>
                    <p>{element.Ram}GB</p>
                    <p>{element.storage.toUpperCase()}</p>
                </div>
            </div>
            <div className="right_subSection">
                <div className="keys">
                    <p>CPU:</p>
                    <p>CPU-ს ბირთვი:</p>
                    <p>CPU-ს ნაკადი:</p>
                </div>
                <div className="values">
                    <p>{element.CPU}</p>
                    <p>{element.CpuCore}</p>
                    <p>{element.CpuThread}</p>
                </div>
            </div>
        </div>
        <div className="other_info_detailed">
            <div className="left_subSection">
                <div className="keys">
                    <p>ლეპტოპის მდგომარეობა:</p>
                    <p>ლეპტოპის ფასი:</p>
                </div>
                <div className="values">
                    <p>{element.condition}</p>
                    <p>{element.price}</p>
                </div>
            </div>
            <div className="right_subSection">
                <div className="keys">
                    <p>შეძენის რიცხვი:</p>
                </div>
                <div className="values">
                    <p>{element.date}</p>
                </div>
            </div>
        </div>
        <div className="lower_section">
            <Link to='/Elements'>
                <p>უკან დაბრუნება</p>
            </Link>  
            <Link to='/Elements'>     
            <p onClick={() => {deleteElement(id); alert('ელემენტი წაშლილია!')}}>ელემენტის წაშლა</p>
            </Link>  
        </div>
    </div>
  )
}

export default Single_element_detailed_info;