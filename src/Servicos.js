import FormularioCursos from './FormularioCursos';

function Servicos() {
    return (
        <section id="servicos" class="py-5 mb-5">
        <div class="container">
          <div class="row">
            <div class="col">
    
    
              <h3>Serviços</h3>
              <button class="btn btn-primary">Adicionar novo</button>
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
  