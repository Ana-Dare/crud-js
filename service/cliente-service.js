const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`) 
    .then(resposta => {
        return resposta.json()
    })
}

listaClientes()
.then(data => {
        data.forEach(elemento => {
            tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email))
})})

