import logo from './logo.svg';
import './App.css';

function App() {

  let posts = '강남 고기 맛집';

  return (
    <div className="App">
      <div className="black-nav">
        {/* font-size -> fontSize  camelCase로 변환됨 */}
        <div style={ {color : 'blue', fontSize : '30px'} }>개발 Blog</div>
        {/* <div>개발 Blog</div> */}
      </div>
      <img src={ logo }/>
      <h4> { posts }</h4>
    </div>
  );
}

export default App;