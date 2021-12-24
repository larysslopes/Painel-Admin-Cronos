function Curso({nome,imagem,descricao,id}){
    return(
        <tr name={id}>
            <td>{nome}</td>
            <td><img src={imagem} class="img-fluid" /></td>
            <td>{descricao}</td>
            <td>
                <button className="btn btn-secondary m-1">editar</button>
                <button className="btn btn-danger m-1" >excluir</button>
            </td>
        </tr>
    )
}
export default Curso
