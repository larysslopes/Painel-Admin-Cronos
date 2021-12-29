function Curso({nome,imagem,descricao,id}){
    const exibirFormulario = () => {
        let addCurso = document.querySelector(".addCurso");
        addCurso.style.display = "block";  
        document.querySelector("#novo-Titulo").value = nome;
        document.querySelector("#novoID").value = id;
        document.querySelector("#novo-Descricao").value = descricao;
        console.log(descricao);
        console.log(document.querySelector("#novo-Descricao").value);
    }

    return(
        <tr name={id}>
            <td>{nome}</td>
            <td><img src={imagem} className="img-fluid" /></td>
            <td>{descricao}</td>
            <td>
                <button className="btnEditar" onClick={exibirFormulario}>editar</button>
                <button className="btnExcluir" >excluir</button>
            </td>
        </tr>
    )
}
export default Curso
