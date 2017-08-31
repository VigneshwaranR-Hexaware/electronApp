const electron=require('electron')
const app =electron.app
const BrowserWindow = electron.BrowserWindow
const appTray= electron.Tray
const path = require('path')
const url = require('url')
const iconPath = path.join(__dirname, './vfs-global.jpg');

let win

function createWindow () {
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
    win = null
  })
})
}


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
  if (win === null) {
    createWindow()
  }
})


  
    