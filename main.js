const electron=require("electron");

const app=electron.app;


function createWindow(){
    const win=new electron.BrowserWindow({
        width :900,
        height :900,
        webPreferences : {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    })
    win.loadFile("index.html").then(function(){
        win.maximize;
        win.webContents.openDevTools();
    })
}

app.whenReady().then(createWindow);
