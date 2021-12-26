function Curso({nome,imagem,descricao,id}){
    return(
        <tr name={id}>
            <td>{nome}</td>
            <td><img src={imagem} class="img-fluid" /></td>
            <td>{descricao}</td>
            <td>
                <button className="btnEditar">editar</button>
                <button className="btnExcluir" >excluir</button>
            </td>
        </tr>
    )
}
export default Curso
