const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

// init browser window
let win;
let addChallengeWin;

// generic create window
function createGenericWindow(directory){
    var currentWin = new BrowserWindow({
        width: 800,
        height: 600,
        icon: __dirname+'../../images/TheChallenger.png'
    });

    // load html page
    currentWin.loadURL(url.format({
        pathname: path.join(__dirname, directory),
        protocol: 'file:',
        slashes: true
    }));

    // open dev tools
    currentWin.webContents.openDevTools();

    // remove stored data
    currentWin.on('closed', ()=>{
        win = null;
    });

    return currentWin;
}

// run 'createWindow' function
//app.on('ready', createWindow);
app.on('ready', ()=>{
    win = createGenericWindow('../views/index.html');
    addChallengeWin = createGenericWindow('../views/addChallenge.html');
});

// quit when all windows are closed
app.on('window-all-closed', ()=>{
    // MAC check
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
