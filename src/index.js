import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './Header';
import Header from './Header';
import Footer from './Footer';
import Servicos from './Servicos';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Servicos />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// Botão adicionar novo - aparecimento do formulario
let btnAddNovo = document.querySelector(".btn-primary")

btnAddNovo.addEventListener("click" , 
function() {
    let addCurso = document.querySelector(".addCurso");

    if(addCurso.style.display === "block") {
        addCurso.style.display = "none";
    } else {
        addCurso.style.display = "block";
    }

})