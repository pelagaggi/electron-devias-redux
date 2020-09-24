const { app, BrowserWindow } = require('electron');

const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');
let port = isDev ? 3000 : 5000;
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
    webApp.listen(process.env.PORT || port,
        function () {
            expressReady = true;
            if (electronReady && expressReady && started === false) {
                started = true;
                createWindow();
            }
        });
}
function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        frame: true,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            preload: __dirname + '/preload.js',
            worldSafeExecuteJavaScript: true,
        },
        show: false
    })
    // and load the index.html of the app.
    win.loadURL(`http://localhost:${port}`);
    win.maximize();
    // Open the DevTools.
    win.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
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

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.