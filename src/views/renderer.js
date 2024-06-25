// Inserir data na página
function obterData() {
    const data = new Date()
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    return data.toLocaleDateString('pt-br', options)
}
 
// interagir diretamente no doom do documento html (index.html)
window.addEventListener('DOMContentLoaded', () => {
    const dataAtual = document.getElementById('data').innerHTML =
    obterData()
})
//Função que e executada quando o botao for clicado
function sobre(){
    api.openAbout()
  
}
//Função que e executada quando o botao for clicado
function clientes(){
    api.openclientes()
  
}
//Função que e executada quando o botao for clicado
function fornecedor(){
    api.openfornecedor()
  
}
//Função que e executada quando o botao for clicado
function produtos(){
    api.openprodutos()
  
}