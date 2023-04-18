import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [a,b] = useState('남자 코드 추천'); 

  let posts = '강남 고기 맛집';
  return (
    <div className="App">
      <div className="black-nav">
        {/* font-size -> fontSize  camelCase로 변환됨 */}
        {/* <div style={ {color : 'blue', fontSize : '30px'} }>개발 Blog</div> */}
        <div>개발 Blog</div>
      </div>
      <div className='list'>
        <h3> { posts }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
