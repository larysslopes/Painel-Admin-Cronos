import FormularioCursos from './FormularioCursos';

function Servicos() {
    return (
        <section id="servicos" class="py-5 mb-5">
        <div class="container">
          <div class="row">
            <div class="col">
    
    
            <section class="addCurso"/>
            <br/>
            <h6> Adicionar novo curso </h6>
            <ul class="cadastroCurso">
              <li><label> Nome do curso: </label> <input type="text"/></li>
              <li><label> Imagem: </label> <input type="file"/></li>
              <li> <label> Descrição: </label> <textarea name="descricao" style="margin: 5px 0px; width: 400px; height: 89px;"></textarea></li>
            </ul>
            
           <br/>
            <button class="btnEnviar"> Adicionar </button>
        <section/>

              <FormularioCursos />
              <table class="table my-5">
                <thead>
                  <tr>
                    <td>Nome</td>
                    <td>Imagem</td>
                    <td>Descrição</td>
                    <td>Ações</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Desenvolvimento Web</td>
                    <td><img src="imagens/ilustra-web.png" class="img-fluid" /></td>
                    <td>Consequatur debitis ipsa numquam illum placeat quod deleniti.</td>
                    <td>
                      <button class="btn btn-secondary m-1">editar</button>
                      <button class="btn btn-danger m-1">excluir</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Marketing Digital</td>
                    <td><img src="imagens/ilustra-marketing.png" class="img-fluid" /></td>
                    <td>Consequatur debitis ipsa numquam illum placeat quod deleniti.</td>
                    <td>
                      <button class="btn btn-secondary m-1">editar</button>
                      <button class="btn btn-danger m-1">excluir</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Consultoria UX</td>
                    <td><img src="imagens/ilustra-ux.png" class="img-fluid" /></td>
                    <td>Consequatur debitis ipsa numquam illum placeat quod deleniti.</td>
                    <td>
                      <button class="btn btn-secondary m-1">editar</button>
                      <button class="btn btn-danger m-1">excluir</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Servicos;
  

  