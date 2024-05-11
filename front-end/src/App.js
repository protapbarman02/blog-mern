import Footer from './components/Footer';
import Header from './components/Header';
import Card from './components/Card';
import Sidebar from './components/Sidebar';

function App() {
  const today = new Date().toLocaleDateString('en-GB');
  const posts = [
    {
      id:1,
      images:['img1.jpg'],
      title:'This is my new laptop',
      content:'Very good laptop, you should buy this also',
      created_at:today
    },
    {
      id:2,
      images:['img1.jpg'],
      title:'This is my new watter bottle',
      content:'Very good bottle, you should buy this also',
      created_at:today
    },
    {
      id:3,
      images:['img1.jpg'],
      title:'This is my new computer',
      content:'performance is awesome, games are buttery smooth',
      created_at:today
    }
  ]
  return (
    <>
      <Header/>
      <div className='container-fluid' style={{ marginTop:50+'px', overflowY:'scroll' }}>
        <div className='row'>
          <div className='col-2 border-end' style={{ height: 'calc(100vh - 100px)' }}>
            <Sidebar/>
          </div>
          <div className='col-10'>
            <Card posts={posts}/>
          </div>
        </div>
      </div>
      <Footer today={today}/>
    </>
  );
}

export default App;
