// import './App.css';
import Header from './components/Header';

function App() {
  const name = "Gabriel"
  const navs = ["Home", "Contacts", "About"]
  return (
    <div className="App">
      <Header title='Free bits'/>
      <h2>Welcome {name}</h2>
      <div>
        {/* <ul>
          {navs.map((item, j)=><li key={j}><a href='#'>{item}</a></li> )}
        </ul> */}
      </div>
        
    </div>
  );
}

export default App;
