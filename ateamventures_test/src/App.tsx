import React , { useState }from 'react';
import Nav from './Components/Nav';
import Filter from './Components/Filter';
import Toggle from './Components/Toggle';
import Cards from './Components/Cards';
import './App.css';




const App: React.FC= () => {


  const [items, setItems] = useState([]);

  return (
    <div className="App">
      <Nav/>
        <div className="req_box">
            <div className="req-title">들어온 요청</div>
            <div className="req-box-exp">파트너님에게 딱 맞는 요청서를 찾아보세요.</div>
          <div className='filter_boundary'>
            <div className='filter'>
              <Filter/>
            </div>
            <div className='toggle_box'>
              <div className='toggle'></div>
              <Toggle/> 상담 중인 요청만 보기
            </div>
          </div>
        </div>
      <div className="dashboard">
        {items.map((el)=> {
          return <Cards/>
        })}
      </div>
    </div>
  );
}

export default App;
