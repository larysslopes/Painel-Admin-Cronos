function FormularioCursos() {
  let novoCurso =  {margin: 5, width: 400, height: 89};
  return (
     <section class="addCurso">
      <br/>
      <h6> Adicionar novo curso </h6>
      <ul class="cadastroCurso">
        <li><label> Nome do curso: </label> <input type="text" id="novo-Titulo"/></li>
        <li><label> Novo ID: </label> <input type="number" id="novoID"/> </li>
        <li><label> Imagem: </label> <input type="file" id="nova-Img"/></li>
        <li> <label> Descrição: </label> <textarea name="descricao" style={novoCurso}> </textarea></li>
      </ul>
      
      <br/>
      <button class="btnEnviar"> Adicionar </button>
      <button class="btnCancelar"> Cancelar </button>
      </section>
    );
  }
  
  export default FormularioCursos;
  