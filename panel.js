const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Tray = electron.Tray;
const host = process.argv[2].split("/")[0].split(" ").reverse()[0].split(".").slice(0, 3).join(".") + ".1"
let mainWindow;

function createWindow(){
    mainWindow = new BrowserWindow({width: 1800, height: 1200});
    mainWindow.loadURL(`http://${host}/`)
    mainWindow.on('closed', () => {
        mainWindow = null;
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin'){
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null){
        createWindow();
    }  
});  