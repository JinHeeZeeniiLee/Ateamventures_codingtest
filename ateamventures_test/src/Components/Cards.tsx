import React, {useState}from 'react';
import Db from '../db/requests.json';

const Cards: React.FC = () => {

    const [list, setList] = useState([]);


    const cardInfo = {
        1:'도면개수', 
        2:'총 수량',
        3:'가공방식', 
        4:'재료'
    };
    

    return (
        <div className="card_container">
            <header className="card_header">
                <div className="project_title"></div>
                <div className='req_customer'>{/* */}|</div>
            </header>

            <div className="due_date">{/**/} 까지 납기</div>

            <ul className="card_info">
                {list.map((cardInfo)=> {
                    return <li></li>
                })}
            </ul>

            <div className="button_container">
                <button className="btn-req-info">요청 내역 보기</button>
                <button className="btn-heat_chat"> 채팅하기 </button>
            </div>
        </div>
    )
}

export default Cards;