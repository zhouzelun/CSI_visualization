const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

/***********************************************************************************************************/
var mysql = require('mysql')
var connection = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '16899199',
    database: 'csi_record'
  }
);
connection.connect(function (err) {
  if (err) {
    console.error('error connecting:' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

var data = [];
var reals = [];
var imags = [];
var abs = [];
var angle = [];
var timereals = [];
var timeimags = [];
var timeabs = [];
var timeangle = [];
function myquery(){
  data = [];
  reals = [];
  imags = [];
  angle = []
  abs= [];
  
  connection.query('select * from csi_table order by id desc limit 1', function (error, results, fields) {
    data[0] = results[0].fir_l.split("|");
    data[1] = results[0].sec_l.split("|");
    data[2] = results[0].thr_l.split("|");
    data[3] = results[0].for_l.split("|");
    data[4] = results[0].fif_l.split("|");
    data[5] = results[0].six_l.split("|");
    data[6] = results[0].sev_l.split("|");
    data[7] = results[0].eig_l.split("|");
    data[8] = results[0].nin_l.split("|");
    
    for (var i = 0; i < 9; i++) {
      //alert(i);
      reals[i] = [];
      imags[i] = [];
      abs[i] = [];
      angle[i] = [];
      var count = 0;
      data[i].forEach(
        function (d) {
          real_imag = d.split('&')
          var a = +real_imag[0];
          var b = +real_imag[1];
          timereals[i][count].push();
          reals[i].push(a);
          imags[i].push(b);
          abs[i].push(Math.sqrt(a*a+b*b));
          angle[i].push(Math.atan(b/a));
        }
      );
    }
    global.sharedObject = {
      realProperty: reals,
      imagProperty: imags,
      absPropert:abs,
      anglePropert:angle
    }
  }
  
);
}
myquery();
setInterval(myquery, 1000);
/******************************************************************************************************************/



const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({ width: 800, height: 600 })

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
