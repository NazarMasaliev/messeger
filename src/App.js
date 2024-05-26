import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginF from './Page/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainPage from './Page/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginF/>}/> 
        <Route path='/MainPage' element={<MainPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
