const { app, ipcMain, BrowserWindow } = require('electron');

var url = `file://${__dirname}/www/index.html`;

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
        width: 1080,
        height: 600,
        minWidth: 800,
        minHeight: 500,
        backgroundColor: '#ffffff',
        frame: false,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadURL(url);
  
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
  