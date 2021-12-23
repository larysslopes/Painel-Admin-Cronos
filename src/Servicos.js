import FormularioCursos from './FormularioCursos';
import ListaCursos from './ListaCursos';

function Servicos() {
    return (
        <section id="servicos" class="py-5 mb-5">
        <div class="container">
          <div class="row">
            <div class="col">
            <h3>Serviços</h3>
            <button class="btn-primary"> Adicionar novo </button>
              <FormularioCursos />
              <ListaCursos/>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Servicos;
  

  