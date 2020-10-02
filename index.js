const { app, ipcMain, BrowserWindow, protocol } = require('electron');
const path = require('path');
const url = require('url');

var filePath = 'www/index.html';

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
        width: 600,
        height: 300,
        minWidth: 400,
        minHeight: 200,
        backgroundColor: '#ffffff',
        frame: false,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadFile(filePath);
  
    //// uncomment below to open the DevTools.
  
    win.webContents.openDevTools()
  
    // Event when the window is closed.
    win.on('closed', function () {
      win = null
    })
}

// Create window on electron intialization
app.whenReady().then(createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {

    // On macOS specific close process
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
  