const { ipcMain } = require('electron')
const { app, BrowserWindow, Menu } = require('electron/main')
const path = require('node:path')
// importa o módulo de conexão
const { conectar, desconectar } = require('./database.js')
// janela principal (definir objeto win como variável publica)
let win
const createWindow = () => {
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
}
// janela Sobre
let about // resolver bug de arbertura de várias janelas (bug1) abrir

const aboutWindow = () => {
  const father = BrowserWindow.getFocusedWindow()
  if (father) {
  // nativeTheme.themeSource = 'dark'
  // se a janela about não estiver aberta
  if (!about) {
    about = new BrowserWindow({
      width: 800, // largura  da janela
      height: 600, // altura da janela
      icon: './src/public/img/img2.png',
      resizable: false, // evitar o redimensionamneto
      // titleBarStyle: 'hidden', // esconder barra de titulo e menu
      autoHideMenuBar: true, // esconder o menu(apenas)
      parent:father,
      modal:true

    })
  }
  }
  
  about.loadFile('./src/views/sobre.html')
  // bug 2 (reabrir a janela se estiver fechada)
  about.on('closed', () => {
    about = null
  })
}

//Janela Secundária 
const childWindow = () => {
  const father = BrowserWindow.getFocusedWindow()
  if (father) {
    const child = new BrowserWindow({
      width: 640,
      height: 450,
      icon: './src/public/img/pc.png',
      autoHideMenuBar: true,
      resizable: false,
      parent: father,
      modal: true
    })
    child.loadFile('./src/views/child.html')
  }
}

let clientes// resolver bug de arbertura de várias janelas (bug1) abrir

const clientesWindow = () => {
  const father = BrowserWindow.getFocusedWindow()
  if (father) {
  // nativeTheme.themeSource = 'dark'
  // se a janela about não estiver aberta
  if (!clientes) {
    clientes = new BrowserWindow({
      width: 800, // largura  da janela
      height: 600, // altura da janela
      icon: './src/public/img/clientes.png',
      resizable: false, // evitar o redimensionameto
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
  }
  }

  fornecedor.loadFile('./src/views/fornecedor.html')
  // bug 2 (reabrir a janela se estiver fechada)
  fornecedor.on('closed', () => {
    fornecedor = null
  })
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
  }
  }
  produtos.loadFile('./src/views/produto.html')
  // bug 2 (reabrir a janela se estiver fechada)
  produtos.on('closed', () => {
    produtos = null
  })
}

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
// criando um template do menu personalizado
const template = [
  {
    label: 'Arquivo',
    submenu: [{
      label: 'janela secundária',
      click: () => childWindow()
    },
    {
      label: 'Sair',
      click: () => app.quit(),
      accelerator: 'Alt+f4'
    },
    {
      label: 'Clientes',
      click: () => clientesWindow()
    },
    {
      label: 'Fornecedores',
      click: () => fornecedorWindow()
    },
    {
      label: 'Produtos',
      click: () => produtosWindow()
    },
    ]

  },
  {

    label: 'Exibir',
    submenu: [{
      label: 'Recarregar',
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
      label: 'Reduzir zoom',
      role: 'zoomOut'
    },
    {
      label: 'Restaurar o zoom padrão',
      role: 'resetZoom'
    }
    ]

  },
  {
    label: 'Ajuda',
    submenu: [
      {
        label: 'docs',
        accelerator: 'Alt+f1',
        click: () => shell.openExternal('https://www.electronjs.org/docs/latest/'),
      },
      {
        type: 'separator',
      },
      {
        label: 'Sobre',

        click: () => aboutWindow()
      }
    ]
  }
]
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

ipcMain.on('open-clientes', () => {
  clientesWindow()
})
ipcMain.on('open-fornecedor', () => {
  fornecedorWindow()
})
ipcMain.on('open-produto', () => {
  produtoWindow()
})
ipcMain.on('open-about', () => {
  aboutWindow()
})