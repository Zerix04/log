
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Daftar from './components/Daftar';
import './App.css';
import Login from './components/Login';





function App() {
  return (
    <BrowserRouter>

      <div class='app'>
        <Routes>
          <Route index element={<Daftar />} />
          <Route path="daftar" element={<Login />} />
        </Routes>
      </div>


    </BrowserRouter>

  );
}

export default App;
