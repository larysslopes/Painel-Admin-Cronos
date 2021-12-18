function FormularioCursos() {
    return (
        <form>
        <label>
          Nome:
        </label>
          <input type="text" name="name" />
        <label>
            Descrição:
        </label>
        <input type="text" name="descricao" />
        <input type="submit" value="Enviar" />
      </form>
    );
  }
  
  export default FormularioCursos;
  