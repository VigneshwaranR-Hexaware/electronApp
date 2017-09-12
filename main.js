const electron=require('electron')
const app =electron.app
const BrowserWindow = electron.BrowserWindow
const appTray= electron.Tray
const path = require('path')
const url = require('url')
const iconPath = path.join(__dirname, './images/vfs-global.jpg');
let win;
function createWindow () {
  const trayControl = new appTray(iconPath)
  trayControl.on('click',function(){
    if(win){
      win.show();  
    }
    else{      
    win = new BrowserWindow({
        width: 450, height: 400,
        webPreferences:{
        devTools:false
        },
        title: "VFS Global",
        icon:'./vfs-global.jpg',
        x:550,
        y:100
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

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})


  
    