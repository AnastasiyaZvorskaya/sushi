import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Set from './components/Set/Set';
import SideBar from './components/SideBar/SideBar';
import Wok from './components/Wok/Wok';
import Home from './components/Home/Home';
import Rolls from './components/Rolls/Rolls';



function App() {
  return (
    <>

      <BrowserRouter>
        <div className='wrapper'>
          <NavBar/>
          <div className='basic'>
            <Header />
            <Routes >
              <Route exact path="/" element={<Home/>} />
              <Route path="/set" element={<Set/>} />
              <Route path="/wok" element={<Wok/>} />
              <Route path="/rolls" element={<Rolls/>} />
            </Routes>
            <Footer />
          </div>
          <SideBar />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;