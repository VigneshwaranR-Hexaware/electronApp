const electron=require('electron')
const app =electron.app
const BrowserWindow = electron.BrowserWindow
const appTray= electron.Tray
const path = require('path')
const url = require('url')
const iconPath = path.join(__dirname, './vfs-global.jpg');


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {
  // Create the browser window.
  const trayControl = new appTray(iconPath)
  trayControl.on('click',function(){
    if(win){
      win.show();
    }
    else{
    win = new BrowserWindow({width: 400, height: 600,
        webPreferences:{
        devTools:false
      },
      title: "VFS Global",
      icon:'./vfs-global.jpg',
      x:950,
      y:250
  })
}
  win.setMenu(null);
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
  win.webContents.openDevTools()
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })

})

  // and load the index.html of the app.
  

  // Emitted when the window is closed.
  
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// win.on('minimize',function(event){
//   event.preventDefault()
//       win.hide();
// });





app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})


  
    