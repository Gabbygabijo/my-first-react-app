import Header from './components/Header';

function App() {
  const name = "Gabriel"
  const navs = [
    {
      name: "Home",
      id: "home",
    },
    {
      name:"Contacts",
      id: "contact",
    },
    {
      name:  "About",
      id: "about"
    }
  ]
  return (
    <div className="App">
      <Header title='Free bits'/>
      <h2>Welcome {name}</h2>
      <div>
        <ul>
          {navs.map((item)=><li id={item.id}><a href='#'>{item.name}</a></li> )}
        </ul>
      </div>
        
    </div>
  );
}

export default App;
