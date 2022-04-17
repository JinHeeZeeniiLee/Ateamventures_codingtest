import React from 'react';

const Cards: React.FC = () => {

    return (
        <>
            <header className="card_header">
                <div className="project_title">{/* */}</div>
                <div className='req_customer'>{/* */}|</div>
            </header>

            <div className="due_date">{/* */} 까지 납기</div>

            <div className="card_info">
                <span>도면개수{/* */}개</span>
                <span>총 수량 {/* */}개</span>
                <span>가공방식 {/* */}</span>
                <span>재료{/* */}</span>
            </div>

            <div className="button_container">
                <button>요청 내역 보기</button>
                <button> 채팅하기 </button>
            </div>
        </>
    )
}

export default Cards;