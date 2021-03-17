import React from 'react';
import logo from '../../assets/Logo.png'
import './Loading.css'


const Loading: React.FC = () => {
    return (
        <div className="loading">
            <div className="logo fade">
                <img className="moveLogo" src={logo} alt="" />
            </div>
        </div>
    )
}

export default Loading;