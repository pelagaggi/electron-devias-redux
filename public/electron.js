const { app, BrowserWindow } = require('electron');

const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');
const express = require('express');
const webApp = express();
let expressReady = false, electronReady = false, started = false;

if (!isDev) {
    webApp.use(express.static(path.join(__dirname, '../build')));
    webApp.get('/ping', function (req, res) {
        return res.send('pong');
    });
    webApp.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
    webApp.listen(process.env.PORT || 3000,
        function () {
            expressReady = true;
            if (electronReady && expressReady && started === false) {
                started = true;
                createWindow();
            }
        });
}
function createWindow() {
    // Cria uma janela de navegação.
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        frame: true,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            preload: __dirname + '/preload.js',
            worldSafeExecuteJavaScript: true,

            'Content-Security-Policy': ['*']
        },
        webSecurity: '*'
    })
    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '/../build/index.html'),
        protocol: 'file:',
        slashes: true
    });
    // e carrega o arquivo index.html do seu aplicativo.
    win.loadURL('http://localhost:3000');/*
    if (isDev) {
        
    } else {
        //win.loadFile('./index.html');
        win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`);
    }/**/
    // Abrir o DevTools (aba de ferramentas para desenvolvedores).
    //win.webContents.openDevTools()
}

// Este método será chamado quando Electron terminar de inicializar
// e também estiver pronto para criar novas janelas do navegador.
// Algumas APIs podem ser usadas somente depois que este evento ocorre.
app.whenReady().then(function () {
    if (isDev) {
        createWindow();
    } else {
        electronReady = true;
        if (electronReady && expressReady && started === false) {
            started = true;
            createWindow();
        }
    }
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

// Nesse arquivo, você pode incluir o resto do código principal
// de processos do seu aplicativo.
// Você também pode colocar eles em arquivos separados e requeridos-as aqui.