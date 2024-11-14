const listaDeItens = [
    { id: 1, nome: 'JavaScript' },
    { id: 2, nome: 'Python' },
    { id: 3, nome: 'Java' },
    { id: 4, nome: 'PHP' },
    { id: 5, nome: 'C#' },
]

function ListaLinguagensProgramacao() {
    return (
        <ul>
            {listaDeItens.map(item => (
                <li key={item.id}>{item.nome}</li>
            ))}
        </ul>
    );
}

export default ListaLinguagensProgramacao