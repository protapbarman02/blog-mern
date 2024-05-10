import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {
  const items = [ { id:1, firstName:"Protap", lastName: "Barman", about: "very good boy" }, { id:2,firstName:"Priyash",lastName: "Barman", about: "very bad boy"} ]
  return (
    <div className="App">
      <Header/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-1 bg-secondary" style={{minHeight: 100 + 'vh'}}>
            <Sidebar/>
          </div>
          <div className="col-11">
            <Card items={items}/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
