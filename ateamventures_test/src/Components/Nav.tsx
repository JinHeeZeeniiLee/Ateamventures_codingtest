import React from 'react';
import '../Styles/Nav.css';
import logo from '../assets/title.png';
import Vector from '../assets/Vector.png'; 
import divider from '../assets/divider.png';


const Nav: React.FC = () => {
 return (
     <>
     <div className="nav_container">
         <div className="nav_title">
            <img src={logo}/>
         </div>

         <div className="nav_userbox">
            <div className="userbox_name">
                <img src={Vector}/>
                A 가공업체
            </div>
            <img src={divider}/>
            <div className="logout_button">
                <button type="button">로그아웃</button>
            </div>
         </div>
     </div>
     </>
 )
}

export default Nav