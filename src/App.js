import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/about/About';
import Blog from './Components/blog/Blog'
import Header from './Components/header/Header';
import Dashbord from './Components/dashbord/Dashbord';
import NotFound from './Components/notFound/NotFound';
import Rattion from './Components/reviews/Rattion';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Ratting' element={<Rattion></Rattion>}></Route>
        <Route path='/dashbord' element={<Dashbord></Dashbord>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
