const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

// init browser window
let win;

function createWindow(){
    win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: __dirname+'../../images/TheChallenger.png'
    });

    // load html page
    win.loadURL(url.format({
        pathname: path.join(__dirname, '../views/index.html'),
        protocol: 'file:',
        slashes: true
    }));
debugger;
    // open dev tools
    win.webContents.openDevTools();

    // remove stored data
    win.on('closed', ()=>{
        win = null;
    });
}

// run 'createWindow' function
app.on('ready', createWindow);

// quit when all windows are closed
app.on('window-all-closed', ()=>{
    // MAC check
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
