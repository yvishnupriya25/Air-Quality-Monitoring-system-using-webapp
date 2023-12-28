import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import LandingPage from './LandingPage';
import About from './About';
import Desc from './Desc';

const Initial = () => {
    return (
        <div>
        <BrowserRouter>
            <Routes >
                <Route exact path='' element={<LandingPage/>} />
                <Route exact path='/login' element={<Login/>} />
                <Route exact path='/dashboard' element={<Home/>} />
                <Route exact path='/about' element={<About/>} />
                <Route exact path='/desc' element={<Desc/>} />

                
            </Routes>
        </BrowserRouter>
        </div>
    );
}

export default Initial;
