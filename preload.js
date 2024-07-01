const { ipcRenderer, contextBridge } = require('electron')
 
 
// status de conexão (verificar se o banco de dados está conectado)
 
ipcRenderer.send('send-message', "status do banco de dados:")
ipcRenderer.on('db-status', (event, status) => {
    console.log(status)
<<<<<<< HEAD
=======
    contextBridge.exposeInMainWorld('api', {
        verElectron: () => process.versions.electron,
        hello: () => ipcRenderer.send('send-message', "oi!"),
        openAbout: () => ipcRenderer.send('open-about'),
        openprodutos: () => ipcRenderer.send('open-produtos'),
        openclientes:() => ipcRenderer.send('open-clientes'),
        openfornecedor:() => ipcRenderer.send('open-fornecedor')
    })
>>>>>>> 88be573f65dd3d65a24dca63b03722b07e659465
})
 
contextBridge.exposeInMainWorld('api', {
    verElectron: () => process.versions.electron,
    hello: () => ipcRenderer.send('send-message', "oi!"),
    openAbout: () => ipcRenderer.send('open-about'),
    openclientes: () => ipcRenderer.send('open-clientes'),
    openfornecedor: () => ipcRenderer.send('open-fornecedor'),
    openprodutos: () => ipcRenderer.send('open-produtos'),
    openrelatorios: () => ipcRenderer.send('open-relatorios')
 
})
 
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
<<<<<<< HEAD
 
=======
>>>>>>> 88be573f65dd3d65a24dca63b03722b07e659465
