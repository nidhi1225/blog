import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';
import Header from './Components/header/header'
import Footer from './Components/footer/footer';
import Desktopmain from './Components/main/desktopMain';
import Mobilemain from './Components/main/mobileMain';
import Aboutus from './Components/pages/aboutUs';
import Contactus from './Components/pages/contactUs';
import Policy from './Components/pages/privacyPolicy';
import Disclamer from './Components/pages/disclamer';
import { Provider } from "react-redux";
import store from "./store.js";
import PostPage from './Components/post/post';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="App flex flex-col justify-between h-screen">
        <header><Header /></header>
        <Routes>
          <Route exact path='/aboutus' element={< Aboutus />}></Route>
          <Route exact path='/contactus' element={< Contactus />}></Route>
          <Route exact path='/privacypolicy' element={< Policy />}></Route>
          <Route exact path='/disclamer' element={< Disclamer />}></Route>
          <Route exact path='/' element={<><div className='max-lg:hidden'><Desktopmain /></div><div className='lg:hidden'><Mobilemain /></div></>}></Route>
          <Route exact path='/post' element={< PostPage />}></Route>
        </Routes>
        <footer><Footer /></footer>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
