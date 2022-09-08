
import './App.css';
import Home from './components/home'
import Employ  from './components/employ'
import Department from './components/Departement'
import Login from './components/Login'
import Navbar from './components/Navbar/navbar';
import{Route ,Routes} from 'react-router-dom'

function App() {
  return (
    <div className='container'>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/employ' element={<Employ/>}/>
      <Route path='/department' element={<Department/>}/>
    </Routes>
    </div>
  );
}

export default App;
