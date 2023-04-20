import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useLocation } from 'react-router-dom';
import error_img from "../assets/png/error4x.png";
import './errores.css'

export const PrivateRoutes = ({ children }) => {
    const { logged } = useContext(UserContext);
    let prueba = ''
    const { pathname, search } = useLocation();
    if(logged){
        prueba = 'logeado'
    } else{
        prueba = 'no logeado'
    }

    return logged ? children : 
    <> {console.log(prueba)}
    <div className='contenedor_error'>
        <img src= {error_img} className='imagen_error' />
        <h1>Error 401</h1>
        <h2>Acceso no autorizado</h2>
    </div>
    
    </>
}