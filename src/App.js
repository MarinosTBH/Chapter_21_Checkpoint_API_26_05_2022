import './App.css';
import Users from './Comps/UserList';
import User from './Comps/User';
import { Route, Routes } from 'react-router';
import Home  from './Comps/Home';

function App() {
  return (
    <div className="App">

      <Routes>
        
        <Route path='/' element ={<Home/>}/>
        <Route path='/UserList'element={<Users/>}/>
        <Route path='/UserList/User:id' element={<User/>}/>

      </Routes>

    </div>
  );
}

export default App;
