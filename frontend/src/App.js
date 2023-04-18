import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/header/header'
import Footer from './Components/footer/footer';
import Desktopmain from './Components/main/desktopMain';
import Mobilemain from './Components/main/mobileMain'

function App() {
  return (
    <div className="App flex flex-col justify-between h-screen">
      <div className="header"><Header /></div>
      <div className='max-lg:hidden'><Desktopmain /></div>
      <div className='lg:hidden'><Mobilemain /></div>
      <div className="footer"><Footer /></div>
    </div>
  );
}

export default App;
