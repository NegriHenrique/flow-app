import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/Logo.png'




// import { Container } from './styles';

const Logo: React.FC = () => {
    return (
        <Link to="/" title="Voltar ao início.">
            <img src={logo} />
        </Link>


    )
}

export default Logo;