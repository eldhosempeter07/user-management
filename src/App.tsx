import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './Pages/AddUser';
import EditUser from './Pages/EditUser';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Navigate to = "/users"/> }
        />
          <Route path='/users' element={<Home/>}/>
          <Route path='/users/create' element={<AddUser/>}/>
          <Route path='/users/:id' element={<EditUser/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes> 
      </BrowserRouter>
      {/* <Home/> */}
    </div>
  );
}

export default App;
