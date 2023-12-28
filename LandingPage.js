import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const LandingPage = () => {

    const nav = useNavigate()

    return (
        <div >
            <center><h1 className="h1">AIR QUALITY MONITORING</h1></center><br/><br/>
        <div className="dbox">
            <button className='icon' onClick={()=>nav('/login')}><b>Login</b></button>
            <button className='icon' onClick={()=>nav('/desc')}><b>Description</b></button>
            <button className='icon' onClick={()=>nav('/about')}><b>About Us</b></button>
        </div></div>
    );
}

export default LandingPage;
