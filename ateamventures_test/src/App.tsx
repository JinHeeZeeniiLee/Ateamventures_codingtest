import React , { useState }from 'react';
import Nav from './Components/Nav';
import Filter from './Components/Filter';
import './App.css';



const App: React.FC= () => {


  const [items, setItems] = useState([]);

  return (
    <div className="App">
      <Nav/>
        <div className="req_box">
            <p className="req-title">들어온 요청</p>
            <p className="req-box-exp">파트너님에게 딱 맞는 요청서를 찾아보세요.</p>
          <div className='filter_box'>
            {/* filter.tsx, Toggle.tsx */}
            <Filter/>
          </div>
        </div>
      <div className="dashboard">
        
      </div>
    </div>
  );
}

export default App;
