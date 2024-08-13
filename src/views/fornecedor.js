/**
 * Processo de renderização
 * Fornecedores
 */
// CRUD Create >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// captura dos inputs do formulário (passo 1 - slides)
let formFornecedor = document.getElementById('frmFornecedor')
let nomeFornecedor = document.getElementById('inputname')
let cnpjFornecedor = document.getElementById('inputCnpj')
let foneFornecedor = document.getElementById('inputPhone')
let emailFornecedor = document.getElementById('inputAddress')
let cepFornecedor = document.getElementById('inputCep')
let logradouroFornecedor = document.getElementById('inputLogradouro')
let numeroFornecedor = document.getElementById('inputNumero')
let complementoFornecedor = document.getElementById('inputComplemento')
let bairroFornecedor = document.getElementById('inputBairro')
let cidadeFornecedor = document.getElementById('inputCidade')
let ufFornecedor = document.getElementById('uf')
// evento relacionado ao botão adicionar (ainda passo 1 - slide)
formFornecedor.addEventListener('submit', async (event) => {
    event.preventDefault()
    console.log(nomeFornecedor.value, cnpjFornecedor.value, emailFornecedor.value, foneFornecedor.value, cepFornecedor.value, logradouroFornecedor.value, numeroFornecedor.value, complementoFornecedor.value, bairroFornecedor.value, cidadeFornecedor.value, ufFornecedor.value)
// Empacotar os dados em um objeto e enviar ao main.js
    const fornecedor = {
        nomeFor: nomeFornecedor.value,
        cnpjFor: cnpjFornecedor.value,
        foneFor: foneFornecedor.value,
        emailFor: emailFornecedor.value,
        cepFor: cepFornecedor.value,
        logFor: logradouroFornecedor.value,
        numFor: numeroFornecedor.value,
        compFor: complementoFornecedor.value,
        bairroFor: bairroFornecedor.value,
        cidFor: cidadeFornecedor.value,
        ufFor: ufFornecedor.value
    }
    api.newFornecedor(fornecedor)
// limpar os dados do form após envio
    formFornecedor.reset()
})
//

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// CRUD Read >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// array (vetor) usado na renderização dos dados do fornecedor
let arrayFornecedor = []
// Função que vai enviar ao main um pedido de busca dos dados de um
// fornecedor pelo nome (Passo 1 - slide)
function buscarFornecedor() {
    let nomeFornecedor = document.getElementById('inputSearch').value.trimStart().trimEnd()
    // validação (UX)
    if (nomeFornecedor === "") {
        // validar campo obrigatório
        api.infoSearchDialog()
    } else {
        // enviar o pedido de busca junto com o nome do Fornecedor
        api.searchFornecedor(nomeFornecedor)
    }
    // foco no campo de busca (UX)
    api.focusSearch((args) => {
        document.getElementById('inputSearch').focus()
    })
    // setar o nome do Fornecedor e habilitar o cadastramento
    api.nameForne((args) => {
        // restaurar o comportamento padrão da tecla Enter
        removerTeclaEnter()
        let setarNomeFornecedor = document.getElementById('inputSearch').value.trim()
        document.getElementById('inputnameFornecedor').value = setarNomeFornecedor
        document.getElementById('inputSearch').value = ""
        document.getElementById('inputSearch').blur()
        document.getElementById('inputSearch').disabled = true
        document.getElementById('inputnameFornecedor').focus()
        btnRead.disabled = true
        btnCreate.disabled = false
    })
    // limpar a caixa de busca e setar o foco
    api.clearSearch((args) => {
        document.getElementById('inputnameSearch').value = ""
        document.getElementById('inputnameSearch').focus()
    })
    // receber do main js os dados do Fornecedor(Passo 4)
    api.dataClient((event, dadosFornecedor) => {
        arrayFornecedor = JSON.parse(dadosFornecedor)
        console.log(arrayFornecedor)
   
    // Passo 5 (Final) percorrer o array, extrair os dados e setar os campos de texto (caixa input) do formulário
    arrayFornecedor.forEach((f) => {
        document.getElementById('inputId').value = f._id,
        document.getElementById('inputname').value = f.nomeFornecedor,
        document.getElementById('inputCnpj').value = f.cnpjFornecedor,
        document.getElementById('inputPhoner').value = f.foneFornecedor,
        document.getElementById('inputAddress').value = f.emailFornecedor,
        document.getElementById('inputCep').value = f.cepFornecedor,
        document.getElementById('inputNumero').value = f.numeroFornecedor,
        document.getElementById('inputComplemento').value = f.complementoFornecedor,
        document.getElementById('inputBairro').value = f.bairroFornecedor,
        document.getElementById('inputCidade').value = f.cidadeFornecedor,
        document.getElementById('inputLogradouro').value = f.logradouroFornecedor
        // limpar a caixa de busca (UX)
        document.getElementById('inputSearch').value = ""
        // remover o foco de desativar
        document.getElementById('inputSearch').disabled = true
        document.getElementById("inputSearch").blur()
        //desativar os botão adicionar e buscar
        document.getElementById("btnCreate").disabled = true
        document.getElementById("btnRead").disabled = true
        // ativar os botões update e delete
        document.getElementById('btnUpdate').disabled = false
        document.getElementById('btnDelete').disabled = false
    })
})
}
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// CRUD Update >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// CRUD Delete >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// Reset do formulário
api.resetForm((args) => {
    resetForm()  
})
 
function resetForm() {
    document.getElementById('inputSearch').disabled = false
    document.getElementById('inputSearch').focus() // foco no campo de busca
    btnCreate.disabled = true // desativa o botão
    btnRead.disabled = false
    btnUpdate.disabled = true
    btnDelete.disabled = true
    document.getElementById("frmFornecedor").addEventListener("keydown", teclaEnter)
}
