import './App.css';
import Header from './components/Header';


function App() {
  const name = "Gabriel"
  const navs = ["Home", "Contacts", "About"]
  return (
    <div className="App">
      <Header/>
      <h2>Welcome {name}</h2>
      <div>
        <ul>
          {navs.map((item, j)=><li key={j}>{item}</li> )}
        </ul>
      </div>
        
    </div>
  );
}

export default App;
