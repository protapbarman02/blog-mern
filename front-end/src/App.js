import Footer from './components/Footer';
import Header from './components/Header';
import Card from './components/Card';
import Sidebar from './components/Sidebar';

function App() {
  const today = new Date().toLocaleDateString('en-GB');
  return (
    <>
      <Header/>
      <div className='container-fluid' style={{ marginTop:50+'px', overflowY:'scroll' }}>
        <div className='row'>
          <div className='col-2 border-end' style={{ height: 'calc(100vh - 100px)' }}>
            <Sidebar/>
          </div>
          <div className='col-10'>
            <Card/>
          </div>
        </div>
      </div>
      <Footer today={today}/>
    </>
  );
}

export default App;
