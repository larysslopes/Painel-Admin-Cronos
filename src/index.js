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


// let dadosCurso = [{
//   nomeCurso: "novoCusoNome",
//   imagem: "novoCursoImagem",
//   descricao: "novoCursoDescricao"
// }]

// function carregarDadosCurso(){
//   let dadosCadastro = document.querySelector(".addCurso");
//   dadosCadastro.innerHTML = "";
//   dadosCurso.forEach((el) => {
//     let nomeCurso = el.nomeCurso;
//     let imagem = el.imagem;
//     let descricao = el.descricao;

//     let addCurso = `<section class="addCurso">
//     <br>
//     <h6> Adicionar novo curso </h6>
//     <ul class="cadastroCurso">
//       <li><label> Nome do curso: </label> <input type="text" value="${nomeCurso}"></li>
//       <li><label> Imagem: </label> <input type="file"value="${imagem}></li>
//       <li> <label> Descrição: </label> <textarea name="descricao" style="margin: 5px 0px; width: 400px; height: 89px;" value="${descricao}></textarea></li>
//     </ul>
    
//    <br>
//     <button class="btnEnviar"> Adicionar </button>
//     <button class="btnCancelar"> Cancelar </button>
// </section>`;

// dadosCadastro.innerHTML += addCurso;

//   })

//   function adicionarNovoCurso() {
//     dadosCurso.push({ identificador: "", nome: "", idade: "" });
//     adicionarNovoCurso();
//   }
// }