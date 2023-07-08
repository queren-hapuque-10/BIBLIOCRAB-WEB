import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import BookDetails from "./components/BookDetails/BookDetails";
import { AppProvider } from './context';
import './index.css';
import Ab from './pages/About/Ab';
import Acervo from './pages/Acervo/Acervo';
import Bk from './pages/Acervo/Usuario/Bk';
import Adm from './pages/FormAdm/Adm';
import Form from './pages/FormCadastro/Form';
import Home from './pages/Home/Home';
import LogAdm from './pages/LoginAdm/LogAdm';
import Servicos from './pages/Servicos/Servicos';
import LogCli from './pages/LoginCliente/LogCli';
import FormAssinatura from './pages/FormAssinatura/FormAssinatura';
import Livros from './pages/CadLivros/Livros';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
          <Route path = "/about" element = {<Ab />} />
          <Route path = "/book" element = {<Acervo />} />
          <Route path = "/book/:id" element = {<BookDetails />} />
          <Route path = "/books" element = {<Bk/>} />
          <Route path='/services' element = {<Servicos/>}/>
          <Route path = "/cadcliente" element = {<Form/>}/>
          <Route path = "/cadadm" element = {<Adm/>}/>
          <Route path = "/login" element = {<LogCli/>}/>
          <Route path = "/loginadm" element = {<LogAdm/>}/>
          <Route path = "/assinatura" element = {<FormAssinatura/>}/>
          <Route path = "/cadlivros" element = {<Livros/>}/>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);
