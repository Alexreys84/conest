const { ipcMain } = require('electron')
const { app, BrowserWindow, Menu, shell } = require('electron/main')
const path = require('node:path')
 
// importa o módulo de conexão
const { conectar, desconectar } = require('./database.js')
 
// janela principal (definir objeto win como variável publica)
let win
const createWindow = () => {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: './src/public/img/pc.png',
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
    // iniciar a janela com o menu personalizado
    Menu.setApplicationMenu(Menu.buildFromTemplate(template)) 
 
    win.loadFile('./src/views/index.html')
<<<<<<< HEAD
=======
  win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: './src/public/img/img3.png',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  // iniciar a janela com o menu personalizado
  Menu.setApplicationMenu(Menu.buildFromTemplate(template))
  win.loadFile('./src/views/index.html')
>>>>>>> 88be573f65dd3d65a24dca63b03722b07e659465
}
 
// janela Sobre
let about // resolver bug de arbertura de várias janelas (bug1) abrir 
const aboutWindow = () => {
const father = BrowserWindow.getFocusedWindow()
    if(father){
    if (!about) {
            about = new BrowserWindow({
            width: 450, // largura  da janela
            height: 320, // altura da janela
            icon: './src/public/img/about.png',
            autoHideMenuBar: true, // esconder o menu(apenas)
            resizable: false,
            parent: father,
            modal: true
        })
    }
    }
 
    about.loadFile('./src/views/sobre.html')
    // bug 2 (reabrir a janela se estiver fechada)
    about.on('closed', () => {
        about = null
    })
<<<<<<< HEAD
}
 
=======
  const father = BrowserWindow.getFocusedWindow()
  if (father) {
    // nativeTheme.themeSource = 'dark'
    // se a janela about não estiver aberta
    if (!about) {
      about = new BrowserWindow({
        width: 450, // largura  da janela
        height: 280, // altura da janela
        icon: './src/public/img/img2.png',
        resizable: false, // evitar o redimensionamneto
        // titleBarStyle: 'hidden', // esconder barra de titulo e menu
        autoHideMenuBar: true, // esconder o menu(apenas)
        parent: father,
        modal: true

      })
    }
  }

  about.loadFile('./src/views/sobre.html')
  // bug 2 (reabrir a janela se estiver fechada)
  about.on('closed', () => {
    about = null
  })
} 
>>>>>>> 88be573f65dd3d65a24dca63b03722b07e659465
// janela clientes
let clientes// resolver bug de arbertura de várias janelas (bug1) abrir
 
const clientesWindow = () => {
    // nativeTheme.themeSource = 'dark'
    // se a janela about não estiver aberta
    const father = BrowserWindow.getFocusedWindow()
    if(father){
    if (!clientes) {
            clientes = new BrowserWindow({
            width:  800, // largura  da janela
            height: 600, // altura da janela
            icon: './src/public/img/clientes.png',
            resizable: false, // evitar o redimensionamneto
            // titleBarStyle: 'hidden', // esconder barra de titulo e menu
            autoHideMenuBar: true, // esconder o menu(apenas)
            parent: father,
            modal: true    
        })
    }
    }
 
    clientes.loadFile('./src/views/clientes.html')
    // bug 2 (reabrir a janela se estiver fechada)
    clientes.on('closed', () => {
        clientes = null
    })
}
 
// janela fornecedores
let fornecedor// resolver bug de arbertura de várias janelas (bug1) abrir
 
const fornecedorWindow = () => {
    // nativeTheme.themeSource = 'dark'
    // se a janela about não estiver aberta
    const father = BrowserWindow.getFocusedWindow()
    if(father){
    if (!fornecedor) {
            fornecedor = new BrowserWindow({
            width:  1280, // largura  da janela
            height: 720, // altura da janela
            icon: './src/public/img/fornecedores.png',
            resizable: false, // evitar o redimensionamneto
            // titleBarStyle: 'hidden', // esconder barra de titulo e menu
            autoHideMenuBar: true, // esconder o menu(apenas)
            parent: father,
            modal: true
        })
    }
    } 
 
    fornecedor.loadFile('./src/views/fornecedor.html')
    // bug 2 (reabrir a janela se estiver fechada)
    fornecedor.on('closed', () => {
        fornecedor = null
    })
}
 
// janela produtos
let produtos// resolver bug de arbertura de várias janelas (bug1) abrir
 
const produtosWindow = () => {
    // nativeTheme.themeSource = 'dark'
    // se a janela about não estiver aberta
    const father = BrowserWindow.getFocusedWindow()
    if(father){
    if (!produtos) {
           
            produtos = new BrowserWindow({
            width: 800, // largura  da janela
            height: 600, // altura da janela
            icon: './src/public/img/produto.png',
            resizable: false, // evitar o redimensionamneto
            // titleBarStyle: 'hidden', // esconder barra de titulo e menu
            autoHideMenuBar: true, // esconder o menu(apenas)
            parent: father,
            modal: true
        })
    }
    }
 
    produtos.loadFile('./src/views/produto.html')
    // bug 2 (reabrir a janela se estiver fechada)
    produtos.on('closed', () => {
        produtos = null
    })
}
<<<<<<< HEAD
 
// janela de relatórios
let relatorios// resolver bug de arbertura de várias janelas (bug1) abrir
 
const relatoriosWindow = () => {
=======
 const clientesWindow = () => {
  const father = BrowserWindow.getFocusedWindow()
  if (father) {
>>>>>>> 88be573f65dd3d65a24dca63b03722b07e659465
    // nativeTheme.themeSource = 'dark'
    // se a janela about não estiver aberta
    const father = BrowserWindow.getFocusedWindow()
    if(father){
    if (!relatorios) {
           
            relatorios = new BrowserWindow({
            width: 800, // largura  da janela
            height: 600, // altura da janela
            icon: './src/public/img/relatorio.png',
            resizable: false, // evitar o redimensionamneto
            // titleBarStyle: 'hidden', // esconder barra de titulo e menu
            autoHideMenuBar: true, // esconder o menu(apenas)
            parent: father,
            modal: true
        })
    }
    }
 
 
    relatorios.loadFile('./src/views/relatorios.html')
    // bug 2 (reabrir a janela se estiver fechada)
    relatorios.on('closed', () => {
        relatorios = null
    })
}
 
<<<<<<< HEAD
=======
let fornecedor// resolver bug de arbertura de várias janelas (bug1) abrir
const fornecedorWindow = () => {
  const father = BrowserWindow.getFocusedWindow()
  if (father) {
    // nativeTheme.themeSource = 'dark'
    // se a janela about não estiver aberta
    if (!fornecedor) {
      fornecedor = new BrowserWindow({
        width: 800, // largura  da janela
        height: 600, // altura da janela
        icon: './src/public/img/fornecedor.png',
        resizable: false, // evitar o redimensionamneto
        // titleBarStyle: 'hidden', // esconder barra de titulo e menu
        autoHideMenuBar: true, // esconder o menu(apenas)
        parent: father,
        modal: true

      })
      fornecedor.loadFile('./src/views/fornecedor.html')
    }
  }
}
let produtos // resolver bug de arbertura de várias janelas (bug1) abrir
const produtosWindow = () => {
  // nativeTheme.themeSource = 'dark'
  // se a janela about não estiver aberta
  if (!produtos) {
    const father = BrowserWindow.getFocusedWindow()
    if (father) {
      produtos = new BrowserWindow({
        width: 800, // largura  da janela
        height: 600, // altura da janela
        icon: './src/public/img/produtos.png',
        resizable: false, // evitar o redimensionamneto
        // titleBarStyle: 'hidden', // esconder barra de titulo e menu
        autoHideMenuBar: true, // esconder o menu(apenas)
        parent: father,
        modal: true

      })
      produtos.loadFile('./src/views/produto.html')
    }
  }
 }

>>>>>>> 88be573f65dd3d65a24dca63b03722b07e659465
// iniciar a aplicação
app.whenReady().then(() => {
 
    //  status de conexão com o banco de dados
    ipcMain.on('send-message', (event, message) => {
        console.log(`<<< ${message}`)
        statusConexao()
    })
 
    // desconectar do banco ao encerrar a janela
    app.on('before-quit', async () => {
        await desconectar()
    }) 
    createWindow()
 
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})
// template do menu personalizado
const template = [
    {
 
        label: 'arquivo',
        submenu: [
            {
                label: 'clientes',
                click: () => clientesWindow()
            },
            {
                label: 'fornecedores',
                click: () => fornecedorWindow()
            },
            {
                label: 'produtos',
                click: () => produtosWindow()
            },
            {
                label: 'sair',
                click: () => app.quit(),
                accelerator: 'Alt+F4'
            }
        ]
 
    },
    {
        label: 'exibir',
        submenu: [{
            label: 'recarregar',
            role: 'reload'
        },
        {
            label: 'ferramentas',
            role: 'toggledevTools'
        },
        {
            type: 'separator'
        },
        {
            label: 'Aplicar zoom',
            role: 'zoomIn'
        },
        {
            label: 'reduzir zoom',
            role: 'zoomOut'
        },
        {
            label: 'Restaurar o zoom padrão',
            role: 'resetZoom'
        }
        ]
 
    },
    {
        label: 'relatorios',
        submenu: [{
 
           label:'relatorios',
           click: () => relatoriosWindow()
        }
        ]
    },
    {
        label: 'ajuda',
        submenu: [{
 
            label: 'sobre',
            click: () => aboutWindow()
        }
        ]
    }
]
 
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
 
// ----------------------------------------------------
// Função que verifica o status da conexão
const statusConexao = async () => {
    try {
        await conectar()
        win.webContents.send('db-status', "Banco de dados conectado.")
    } catch (error) {
        win.webContents.send('db-status', `Erro de conexão: ${error.message}`)
    }
}
<<<<<<< HEAD
 
// exemplo 3: recebimento do renderer de uma ação a ser executada
=======

// exemplo 3: recebimento do renderer de uma ação a ser executada

ipcMain.on('open-clientes', () => {
  clientesWindow()
})
ipcMain.on('open-fornecedor', () => {
  fornecedorWindow()
})
ipcMain.on('open-produto', () => {
  produtosWindow()
})
>>>>>>> 88be573f65dd3d65a24dca63b03722b07e659465
ipcMain.on('open-about', () => {
    aboutWindow()
})
// clientes
ipcMain.on('open-clientes', () => {
    clientesWindow()
})
// fornecedores
ipcMain.on('open-fornecedor', () => {
    fornecedorWindow()
})
// produtos
ipcMain.on('open-produtos', () => {
    produtosWindow()
})
<<<<<<< HEAD
// relatorios
ipcMain.on('open-relatorios', () => {
    relatoriosWindow()
})
=======
>>>>>>> 88be573f65dd3d65a24dca63b03722b07e659465
