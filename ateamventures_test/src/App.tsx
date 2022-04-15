import React from 'react';
import Nav from './Components/Nav';
import './App.css';



const App: React.FC= () => {
  return (
    <div className="App">
      <Nav/>
      <div className="dashboard">
        <div className="req_box">
          <span className="req-title">들어온 요청</span>
        </div>
      </div>
    </div>
  );
}

export default App;
