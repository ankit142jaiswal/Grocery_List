
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Screen/Home.js';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';
import { Grocerylist } from './Screen/Grocerylist.js';
import Login from './Screen/Login.js';
import Signup from './Screen/Signup.js';
import { Mylist } from './Screen/Mylist.js';
function App() {
  return (
    <div >
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/grocerylist' element={<Grocerylist/>}/>
          <Route exact path='/mylist' element={<Mylist/>}/>          
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/signup'element={<Signup/>} />
        </Routes>
        <Footer/>
      </Router>
      
     
    </div>
  );
}

export default App;
