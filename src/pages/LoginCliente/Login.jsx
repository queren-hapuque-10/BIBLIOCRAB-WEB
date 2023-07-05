import React from 'react';
import Footer from '../../components/Footer/Footer';
import LoginCliente from '../../components/FormCliente/LoginCliente';
import Navbar from '../../components/Navbar/Navbar';
function Login ()  {
  return (
    <main>
    <Navbar/>
    <LoginCliente/>
    <Footer/>
    </main>
  )
}

export default Login