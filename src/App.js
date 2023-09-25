
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Navbarcommon from './components/common/Navbarcommon';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import CategoryProduct from './components/CategoryProduct';
import Allproducts from './components/Allproducts';
import Cardapi from './components/common/Card';


function App() {
  return (
    <div className="App">
      <Router>
         <Navbarcommon/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/CategoryProduct/:user' element={<CategoryProduct/>} />
          <Route path='/Allproduct' element={<Allproducts/>} />
        </Routes>
      </Router>
     
      
    </div>
  );
}

export default App;
