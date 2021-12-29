import {criarCurso} from './CrudUtils';

function FormularioCursos({eventoRedraw}) {
  const evt = () => {
    criarCurso();
    eventoRedraw();
  }

  const cancelar = () => {
    let addCurso = document.querySelector(".addCurso");
    addCurso.style.display = "none";
  }

  let novoCurso =  {margin: 5, width: 400, height: 89};
  return (
     <section className="addCurso">
      <br/>
      <h6> Adicionar novo curso </h6>
      <ul className="cadastroCurso">
        <li><label> Nome do curso: </label> <input type="text" id="novo-Titulo"/></li>
        <li><label> Novo ID: </label> <input type="number" id="novoID"/> </li>
        <li><label> Imagem: </label> <input type="file" id="nova-Img"/></li>
        <li><label> Descrição: </label> <textarea id="novo-Descricao" name="descricao" style={novoCurso}> </textarea></li>
      </ul>
      
      <br/>
      <button className="btnEnviar" onClick={evt}> Adicionar </button>
      <button className="btnCancelar" onClick={cancelar}> Cancelar </button>
      </section>
    );
  }
  
  export default FormularioCursos;
  