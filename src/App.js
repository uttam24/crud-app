import React, { useState } from 'react';
import './App.css';
import Datatable from './componets/Datatable';
import Nav from './componets/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Update from './componets/Update';
import UserUpdate from './componets/UserUpdate';
import Read from './componets/Read';
import Home from './componets/Home';
function App() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState(data)

  return (
    <>
      <BrowserRouter>
        <Nav search={search} setSearch={setSearch} data={data} />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product' element={<Datatable search={search} setSearch={setSearch} data={data} setData={setData} />} />
            <Route path='/update' element={<Update />} />
            <Route path='/userupdate/:id' element={<UserUpdate />} />
            <Route path='/read/:id' element={<Read />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
