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

const cursos = require('./cursos.json'); //importando arquivo json
  

let btnEnviar = document.querySelector(".btnEnviar")
// let btnCancelar = document.querySelector("btnCancelar")
// let btnEditar = document.querySelector("btnEditar")
// let btnExcluir = document.querySelector("btnExcluir")

// Cadastrar Curso
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

//Criar Curso
const criarCurso = () => {

  // input
  let novoTitulo = document.querySelector("#novo-Titulo").value;
  let novoID = document.querySelector("#novoID").value;
  let novaImagem = document.querySelector("#nova-Img").value;
  let novoDescricao = document.querySelector("#novo-Descricao").value;

  // json
  cursos.push({
    'nome': novoTitulo,
    'imagem': novaImagem,
    'descricao': novoDescricao,
    'id': novoID
  
  });

  const novoCurso = document.createElement("tr")
  novoCurso.innerHTML = `
  <td>"${novoTitulo}" </td>
  <td><img src=${novaImagem}"" class="img" /></td>
  <td>${novoDescricao} </td>
  <td>
  <button class="btnEditar" onclick="editarCurso(${novoID})">Editar</button>
  <button class="btnExcluir" onclick="deletarCurso(${novoID})">Excluir</button>
  </td>  `;

  novoCurso.setAttribute("id", `${novoID}`);
  document.querySelector(".tabela").appendChild(novoCurso);
  document.querySelector(".tab").reset();
  
}



btnEnviar.addEventListener("click", criarCurso)
