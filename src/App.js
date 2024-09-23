import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Common from './components/common/Header';
import Home from './components/home/Hero';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Common/>} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
