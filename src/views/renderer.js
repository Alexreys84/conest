/**
 * processo de renderização do documento index.html
 *@author Alex Reis
 */
 
 console.log("processo de renderização")
 
 // vinculado ao preoload.js
 console.log(`Electron: ${api.verElectron()}`)
 api.hello()
 
 //  função que é executada quando o botão for clicado
 function sobre() {
     api.openAbout()
 }
 function clientes() {
    api.openclientes()
<<<<<<< HEAD
 }
 function fornecedores() {
    api.openfornecedores()
 }
 function produto() {
=======
  
}
//Função que e executada quando o botao for clicado
function fornecedor(){
    api.openfornecedor()
  
}
//Função que e executada quando o botao for clicado
function produtos(){
>>>>>>> eb22972eb2fa6f24449cd4170047f926e73c4519
    api.openprodutos()
 }