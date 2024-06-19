const {ipcRenderer} = require('electron')

//status de conexão (verificar se o banco de dados estao conectados)

ipcRenderer.send('send-message',"Status do banco de dados:")

ipcRenderer.on('db-status',(event, status )=> {
    console.log(status)

})
